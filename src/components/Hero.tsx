import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Floating orbs data — posisi & ukuran tetap agar tidak re-render
const orbs = [
  { w: 320, h: 320, x: "10%",  y: "15%", dur: 8,  delay: 0,   opacity: 0.18 },
  { w: 200, h: 200, x: "75%",  y: "8%",  dur: 11, delay: 1.5, opacity: 0.14 },
  { w: 260, h: 260, x: "60%",  y: "55%", dur: 9,  delay: 3,   opacity: 0.12 },
  { w: 150, h: 150, x: "20%",  y: "65%", dur: 13, delay: 0.8, opacity: 0.16 },
  { w: 180, h: 180, x: "85%",  y: "70%", dur: 10, delay: 2,   opacity: 0.10 },
  { w: 100, h: 100, x: "45%",  y: "20%", dur: 7,  delay: 4,   opacity: 0.13 },
];

export default function Hero() {
  const [isLaptop, setIsLaptop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const check = () => {
      setIsLaptop(window.innerWidth >= 1024);
      setIsMobile(window.innerWidth < 640);
    };
    check();
    window.addEventListener("resize", check);
    const t = setTimeout(() => setMounted(true), 50);
    return () => {
      window.removeEventListener("resize", check);
      clearTimeout(t);
    };
  }, []);

  const fadeIn = (delay: number) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0)" : "translateY(30px)",
    transition: `opacity 0.5s ease ${delay}s, transform 0.5s ease ${delay}s`,
  });

  // Portrait sizing per breakpoint
  const portraitWidth = isLaptop
    ? "clamp(500px, 65vw, 900px)"
    : isMobile
    ? "clamp(300px, 98vw, 500px)"
    : "clamp(340px, 55vw, 680px)";

  // Mobile: bottom=0 agar foto menempel ke bawah, tidak ngambang
  const portraitBottom = isLaptop ? "-10%" : "0%";
  const portraitHeight = isLaptop ? "115%" : isMobile ? "92%" : "100%";

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{
        minHeight: "100dvh",
        background:
          "radial-gradient(ellipse 80% 90% at 50% 80%, #F0C060 0%, #F5D98A 15%, #FBF0C0 35%, #FDF8E8 55%, #FFFFFF 75%)",
      }}
    >
      {/* ── ANIMATED BACKGROUND ORBS ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {orbs.map((orb, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: orb.w,
              height: orb.h,
              left: orb.x,
              top: orb.y,
              background: `radial-gradient(circle, rgba(240,192,80,${orb.opacity}) 0%, rgba(245,217,138,${orb.opacity * 0.6}) 50%, transparent 70%)`,
              filter: "blur(40px)",
            }}
            animate={{
              y: [0, -30, 0, 20, 0],
              x: [0, 15, -10, 5, 0],
              scale: [1, 1.08, 0.95, 1.04, 1],
            }}
            transition={{
              duration: orb.dur,
              delay: orb.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* NAVBAR SPACER — matches navbar height (h-20 = 80px) */}
      <div className="h-20" />

      {/* MAIN CONTENT AREA */}
      <div
        className="relative mx-auto"
        style={{
          maxWidth: "1400px",
          height: "calc(100dvh - 80px)",
          padding: "0 clamp(16px, 4vw, 60px)",
        }}
      >
        {/* ── "Hey, there" ── */}
        <div
          className="absolute w-full left-0 right-0 z-20 text-center pointer-events-none select-none"
          style={{
            top: isLaptop ? "10%" : isMobile ? "18%" : "12%",
            paddingLeft: "clamp(12px, 4vw, 48px)",
            paddingRight: "clamp(12px, 4vw, 48px)",
            ...fadeIn(0.1),
          }}
        >
          <h1
            className="leading-none w-full"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "clamp(44px, 9.5vw, 126px)",
              fontWeight: 300,
              color: "#1a1a1a",
              letterSpacing: "0.18em",
            }}
          >
            Hey,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;there
          </h1>
        </div>

        {/* ── PORTRAIT ── */}
        <div
          className="absolute z-10"
          style={{
            left: "50%",
            transform: "translateX(-50%)",
            bottom: portraitBottom,
            width: portraitWidth,
            height: portraitHeight,
            maxHeight: "calc(100dvh - 80px)",
          }}
        >
          <img
            src="/hero-potrait.webp"
            alt="Portrait of Irsyad"
            className="w-full h-full object-contain object-bottom"
            style={{
              opacity: mounted ? 1 : 0,
              transition: "opacity 0.5s ease 0.2s",
            }}
          />
          {/* Bottom fade */}
          <div
            className="absolute bottom-0 left-0 right-0 pointer-events-none"
            style={{
              height: "28%",
              background:
                "linear-gradient(to top, rgba(248,230,150,0.65) 0%, transparent 100%)",
            }}
          />
        </div>

        {/* ── BADGE ── */}
        <div
          className="absolute z-30 flex items-center gap-1.5 bg-white/80 backdrop-blur-sm rounded-full border border-black/10 shadow-sm"
          style={{
            left: isMobile
              ? "clamp(12px, 4vw, 24px)"
              : "clamp(12px, 10vw, 160px)",
            top: isMobile ? "44%" : "44%",
            padding: "clamp(4px, 0.8vw, 6px) clamp(8px, 1.6vw, 14px)",
            ...fadeIn(0.3),
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse shrink-0" />
          <span
            className="font-medium whitespace-nowrap"
            style={{ fontSize: "clamp(10px, 1.8vw, 13px)" }}
          >
            Available for new opportunities
          </span>
        </div>

        {/* ── DESCRIPTION (desktop/tablet only) ── */}
        <div
          className="absolute z-30 hidden md:block"
          style={{
            right: "clamp(12px, 10vw, 160px)",
            top: isLaptop ? "46%" : "42%",
            maxWidth: "190px",
            ...fadeIn(0.4),
          }}
        >
          <p
            className="font-medium leading-relaxed"
            style={{ color: "#333", fontSize: "clamp(11px, 1.1vw, 14px)" }}
          >
            Siswa SMK yang fokus pada Pengembangan Web, Pengembangan Game, dan eksplorasi Teknologi.
          </p>
        </div>

        {/* ── BOTTOM: I AM IRSYAD + WEB & GAME DEVELOPER ── */}
        <div
          className="absolute z-30 w-full flex items-end justify-between"
          style={{
            bottom: isMobile ? "clamp(16px, 4vh, 32px)" : "clamp(48px, 8vh, 110px)",
            left: 0,
            right: 0,
            paddingLeft: isMobile
              ? "clamp(12px, 4vw, 24px)"
              : "clamp(12px, 10vw, 160px)",
            paddingRight: isMobile
              ? "clamp(12px, 4vw, 24px)"
              : "clamp(12px, 10vw, 160px)",
            ...fadeIn(0.5),
          }}
        >
          {/* Left: I AM IRSYAD */}
          <div>
            <p
              className="font-sans font-semibold uppercase tracking-widest mb-1"
              style={{
                color: "#555",
                fontSize: "clamp(7px, 0.9vw, 12px)",
                textShadow: "0 1px 4px rgba(255,255,255,0.7)",
              }}
            >
              Portfolio 2026
            </p>
            <div
              className="font-black font-sans uppercase leading-[0.85] tracking-tighter"
              style={{
                color: "#0a0a0a",
                fontSize: isMobile ? "clamp(28px, 8vw, 44px)" : "clamp(26px, 5.2vw, 80px)",
                textShadow:
                  "0 2px 12px rgba(255,255,255,0.95), 0 0 4px rgba(255,255,255,0.8)",
              }}
            >
              I AM
              <br />
              IRSYAD
            </div>
          </div>

          {/* Right: WEB & GAME DEVELOPER */}
          <div className="text-right">
            <p
              className="font-sans font-semibold uppercase tracking-widest mb-1"
              style={{
                color: "#555",
                fontSize: "clamp(7px, 0.9vw, 12px)",
                textShadow: "0 1px 4px rgba(255,255,255,0.7)",
              }}
            >
              Berbasis di Semarang, ID
            </p>
            <div
              className="uppercase font-black tracking-wide"
              style={{
                color: "#0a0a0a",
                fontSize: isMobile ? "clamp(12px, 3.5vw, 20px)" : "clamp(13px, 2.1vw, 30px)",
                lineHeight: 1.1,
                textShadow:
                  "0 2px 12px rgba(255,255,255,0.95), 0 0 4px rgba(255,255,255,0.8)",
              }}
            >
              <span className="block">WEB &amp; GAME</span>
              <span className="block">DEVELOPER</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: "160px",
          zIndex: 50,
          background: "linear-gradient(to bottom, transparent 0%, #FDFAF0 100%)",
        }}
      />
    </section>
  );
}
