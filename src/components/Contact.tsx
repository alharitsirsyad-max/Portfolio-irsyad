import { useState, useRef, useEffect } from "react";
import { Mail, Instagram, Github, Send, CheckCircle } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion, useInView, AnimatePresence } from "framer-motion";

const FORMSPREE_URL = "https://formspree.io/f/xnjoyplk";

// Rate limit: max 10 kirim per 1 jam
const RATE_LIMIT = 10;
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1 jam

function getRateData(): number[] {
  try {
    const raw = localStorage.getItem("contact_rate");
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}

function checkRateLimit(): { allowed: boolean } {
  const now = Date.now();
  const timestamps = getRateData().filter(t => now - t < RATE_WINDOW_MS);
  return { allowed: timestamps.length < RATE_LIMIT };
}

function recordSubmit() {
  const now = Date.now();
  const timestamps = getRateData().filter(t => now - t < RATE_WINDOW_MS);
  timestamps.push(now);
  localStorage.setItem("contact_rate", JSON.stringify(timestamps));
}

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [rateLimitMsg, setRateLimitMsg] = useState("");
  const cooldownRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    return () => { if (cooldownRef.current) clearInterval(cooldownRef.current); };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { allowed } = checkRateLimit();
    if (!allowed) {
      setRateLimitMsg("Terlalu banyak percobaan. Coba lagi dalam 1 jam.");
      return;
    }
    setRateLimitMsg("");
    setStatus("loading");

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      if (res.ok) {
        recordSubmit();
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const isDisabled = status === "loading";

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="py-20 md:py-32 bg-white"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left Side: Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4">Hubungi Saya</h2>
            <p className="text-base md:text-xl text-muted-foreground font-sans mb-8 max-w-md">
              Tertarik bekerja sama, punya pertanyaan, atau sekadar ingin menyapa? Jangan ragu untuk menghubungi saya.
            </p>

            <div className="space-y-5 sm:space-y-7">
              <a href="mailto:irsyadabdul999@gmail.com" className="flex items-center group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-card border border-border flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors mr-4 sm:mr-6 shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-muted-foreground font-bold uppercase tracking-wider mb-0.5">Email</p>
                  <p className="text-sm sm:text-xl font-medium break-all leading-snug">irsyadabdul999@gmail.com</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/irsyad-abdul-jabbar-al-harits-963b97407" target="_blank" rel="noreferrer" className="flex items-center group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-card border border-border flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors mr-4 sm:mr-6 shrink-0">
                  <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground font-bold uppercase tracking-wider mb-0.5">LinkedIn</p>
                  <p className="text-base sm:text-xl font-medium">Irsyad Abdul Jabbar</p>
                </div>
              </a>

              <a href="https://instagram.com/abdulll78880" target="_blank" rel="noreferrer" className="flex items-center group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-card border border-border flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors mr-4 sm:mr-6 shrink-0">
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground font-bold uppercase tracking-wider mb-0.5">Instagram</p>
                  <p className="text-base sm:text-xl font-medium">@abdulll78880</p>
                </div>
              </a>

              <a href="https://github.com/alharitsirsyad-max" target="_blank" rel="noreferrer" className="flex items-center group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-card border border-border flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors mr-4 sm:mr-6 shrink-0">
                  <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground font-bold uppercase tracking-wider mb-0.5">Github</p>
                  <p className="text-base sm:text-xl font-medium">alharitsirsyad-max</p>
                </div>
              </a>

              <a href="https://wa.me/6289513766615" target="_blank" rel="noreferrer" className="flex items-center group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-card border border-border flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors mr-4 sm:mr-6 shrink-0">
                  <SiWhatsapp className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground font-bold uppercase tracking-wider mb-0.5">WhatsApp</p>
                  <p className="text-base sm:text-xl font-medium">+62 895-1376-6615</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Side: Form / Success */}
          <motion.div
            className="bg-background p-6 sm:p-8 md:p-12 rounded-xl border border-border/50 shadow-sm flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {status === "success" ? (
                /* ── SUCCESS STATE ── */
                <motion.div
                  key="success"
                  className="flex flex-col items-center justify-center flex-1 py-12 text-center gap-5"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <div className="w-20 h-20 rounded-xl bg-foreground flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-background" />
                  </div>
                  <h3 className="text-2xl font-bold">Pesan Terkirim!</h3>
                  <p className="text-muted-foreground max-w-xs">
                    Terima kasih telah menghubungi saya. Saya akan segera membalas pesan Anda.
                  </p>
                  <Button
                    variant="outline"
                    className="rounded-lg px-6 mt-2"
                    onClick={() => setStatus("idle")}
                  >
                    Kirim Pesan Lagi
                  </Button>
                </motion.div>
              ) : (
                /* ── FORM STATE ── */
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">Kirim Pesan</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">

                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs sm:text-sm font-bold uppercase tracking-wider text-muted-foreground">Nama Lengkap</label>
                      <Input
                        id="name"
                        required
                        placeholder="Irsyad Abdul"
                        className="bg-background border-border/50 rounded-lg h-12 sm:h-14 px-4"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs sm:text-sm font-bold uppercase tracking-wider text-muted-foreground">Alamat Email</label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="contoh@gmail.com"
                        className="bg-background border-border/50 rounded-lg h-12 sm:h-14 px-4"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-xs sm:text-sm font-bold uppercase tracking-wider text-muted-foreground">Pesan</label>
                      <Textarea
                        id="message"
                        required
                        placeholder="Ceritakan tentang proyek Anda..."
                        className="bg-background border-border/50 rounded-lg min-h-[130px] sm:min-h-[150px] p-4 resize-none"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    {rateLimitMsg && <p className="text-xs text-orange-500 font-medium">{rateLimitMsg}</p>}
                    {status === "error" && <p className="text-sm text-red-500 font-medium">Gagal mengirim. Coba lagi atau hubungi via WhatsApp.</p>}

                    <Button
                      type="submit"
                      disabled={isDisabled}
                      className="w-full h-12 sm:h-14 rounded-lg text-base sm:text-lg font-bold"
                    >
                      <span>{status === "loading" ? "Mengirim..." : "Kirim Pesan"}</span>
                      <Send className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                    </Button>

                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
