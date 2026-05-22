import { useEffect } from "react";
import { ref, set, push, get, remove, onDisconnect, serverTimestamp } from "firebase/database";
import { db } from "@/lib/firebase";

const SIXTY_DAYS_MS = 60 * 24 * 60 * 60 * 1000; // 60 hari dalam milidetik

function generateSessionId(): string {
  return Math.random().toString(36).substring(2, 15) + Date.now().toString(36);
}

function getDeviceInfo(): string {
  const ua = navigator.userAgent;
  const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
  const isTablet = /iPad|Android(?!.*Mobile)/i.test(ua);
  const device = isMobile ? (isTablet ? "Tablet" : "Mobile") : "Desktop";

  let browser = "Unknown";
  if (ua.includes("Chrome") && !ua.includes("Edg")) browser = "Chrome";
  else if (ua.includes("Firefox")) browser = "Firefox";
  else if (ua.includes("Safari") && !ua.includes("Chrome")) browser = "Safari";
  else if (ua.includes("Edg")) browser = "Edge";
  else if (ua.includes("Opera") || ua.includes("OPR")) browser = "Opera";

  return `${device} - ${browser}`;
}

function getPageName(path: string): string {
  if (path === "/" || path === "") return "Beranda";
  if (path.includes("/projects")) return "Portofolio";
  if (path.includes("/certificates")) return "Sertifikat";
  return path;
}

function getFormattedTime(): string {
  return new Date().toLocaleString("id-ID", {
    timeZone: "Asia/Jakarta",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

// Hapus log yang lebih dari 60 hari
async function cleanupOldLogs() {
  try {
    const logsRef = ref(db, "visitorLogs");
    const snapshot = await get(logsRef);

    if (!snapshot.exists()) return;

    const now = Date.now();
    const deletions: Promise<void>[] = [];

    snapshot.forEach((child) => {
      const data = child.val();
      // timestamp disimpan sebagai angka (epochMs)
      if (data?.epochMs && now - data.epochMs > SIXTY_DAYS_MS) {
        deletions.push(remove(ref(db, `visitorLogs/${child.key}`)));
      }
    });

    if (deletions.length > 0) {
      await Promise.all(deletions);
      console.log(`[Visitor] Cleaned up ${deletions.length} old log(s)`);
    }
  } catch (err) {
    // Cleanup gagal tidak boleh ganggu user
    console.warn("[Visitor] Cleanup skipped:", err);
  }
}

export function useVisitorTracking() {
  useEffect(() => {
    const sessionId = generateSessionId();
    const device = getDeviceInfo();
    const page = getPageName(window.location.pathname);
    const enteredAt = getFormattedTime();
    const epochMs = Date.now(); // timestamp numerik untuk keperluan cleanup

    // ── 1. ACTIVE VISITORS (hilang saat close tab) ──
    const activeRef = ref(db, `activeVisitors/${sessionId}`);
    set(activeRef, {
      sessionId,
      page,
      device,
      enteredAt,
      timestamp: serverTimestamp(),
    });
    onDisconnect(activeRef).remove();

    // ── 2. VISITOR LOGS (tersimpan permanen, auto-cleanup 60 hari) ──
    const logsRef = ref(db, "visitorLogs");
    push(logsRef, {
      sessionId,
      page,
      device,
      enteredAt,
      epochMs, // dipakai untuk deteksi umur data
      timestamp: serverTimestamp(),
    });

    // ── 3. AUTO-CLEANUP log > 60 hari (jalan di background) ──
    cleanupOldLogs();

    return () => {
      set(activeRef, null);
    };
  }, []);
}
