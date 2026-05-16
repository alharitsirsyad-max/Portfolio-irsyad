import { useLocation } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center px-6 text-center"
      style={{
        background:
          "radial-gradient(ellipse 80% 90% at 50% 80%, #F0C060 0%, #F5D98A 15%, #FBF0C0 35%, #FDF8E8 55%, #FFFFFF 75%)",
      }}
    >
      <p
        className="font-sans font-black uppercase tracking-widest mb-4"
        style={{ fontSize: "clamp(80px, 20vw, 180px)", color: "#0a0a0a", lineHeight: 1 }}
      >
        404
      </p>

      <h1
        className="font-serif italic font-light mb-3"
        style={{ fontSize: "clamp(24px, 5vw, 48px)", color: "#1a1a1a" }}
      >
        Halaman tidak ditemukan
      </h1>

      <p className="text-muted-foreground mb-10 max-w-sm text-base">
        Halaman yang kamu cari tidak ada atau telah dipindahkan.
      </p>

      <Button
        className="rounded-full px-8 py-5 text-base font-semibold flex items-center gap-2"
        style={{ background: "#0d0d0d", color: "#fff" }}
        onClick={() => setLocation("/")}
      >
        <ArrowLeft className="w-4 h-4" />
        Kembali ke Beranda
      </Button>
    </div>
  );
}
