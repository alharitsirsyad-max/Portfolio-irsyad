import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { useLocation } from "wouter";

const navLinks = [
  { href: "#hero", label: "Beranda" },
  { href: "#about", label: "Tentang" },
  { href: "#skills", label: "Keahlian" },
  { href: "#projects", label: "Portofolio" },
  { href: "#certificates", label: "Sertifikat" },
];

// Section IDs untuk IntersectionObserver
const sectionIds = ["hero", "about", "skills", "projects", "certificates", "contact"];

export default function Navbar({ alwaysBorder = false }: { alwaysBorder?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    // Cek langsung saat mount
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Paksa solid kalau sudah tidak di hero section
  const isNavSolid = scrolled || alwaysBorder || activeSection !== "hero";

  // IntersectionObserver untuk detect section aktif
  useEffect(() => {
    if (location !== "/") return;

    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        {
          rootMargin: "-40% 0px -55% 0px",
          threshold: 0,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [location]);

  const scrollToSection = (sectionHref: string) => {
    const isOnHome = location === "/";

    if (isOnHome) {
      if (sectionHref === "#hero") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const el = document.querySelector(sectionHref);
        if (el) {
          const offsetTop = el.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top: offsetTop, behavior: "smooth" });
        }
      }
    } else {
      setLocation("/");
      setTimeout(() => {
        if (sectionHref === "#hero") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const el = document.querySelector(sectionHref);
          if (el) {
            const offsetTop = el.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({ top: offsetTop, behavior: "smooth" });
          }
        }
      }, 150);
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    scrollToSection(href);
  };

  const isActive = (href: string) => {
    const id = href.replace("#", "");
    return activeSection === id;
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: isNavSolid ? "rgba(255,255,255,0.92)" : "transparent",
        backdropFilter: isNavSolid ? "blur(12px)" : "none",
        WebkitBackdropFilter: isNavSolid ? "blur(12px)" : "none",
        borderBottom: isNavSolid ? "1px solid rgba(0,0,0,0.07)" : "1px solid transparent",
        boxShadow: isNavSolid ? "0 1px 8px rgba(0,0,0,0.06)" : "none",
      }}
    >
      <div
        className="mx-auto h-20 flex items-center justify-between"
        style={{
          maxWidth: "1400px",
          paddingLeft: "clamp(12px, 10vw, 160px)",
          paddingRight: "clamp(12px, 10vw, 160px)",
        }}
      >
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="text-2xl font-serif italic font-medium tracking-tight"
          style={{ color: "#1a1a1a" }}
        >
          Irsyad.
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-7">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative flex flex-col items-center gap-1 text-[15px] font-medium transition-all hover:opacity-70"
                style={{ color: "#1a1a1a" }}
              >
                {link.label}
                {/* Garis aktif */}
                <span
                  className="block rounded-full transition-all duration-300"
                  style={{
                    width: active ? "100%" : "0%",
                    height: "2px",
                    background: "#0a0a0a",
                    opacity: active ? 1 : 0,
                  }}
                />
              </a>
            );
          })}
        </div>

        {/* Tombol Kontak */}
        <div className="hidden md:block">
          <Button
            className="rounded-lg px-6 py-2.5 text-[15px] font-semibold"
            style={{ background: "#0d0d0d", color: "#fff", border: "none" }}
            onClick={() => scrollToSection("#contact")}
          >
            Kontak
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Menu className="h-6 w-6" style={{ color: "#1a1a1a" }} />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col space-y-6 mt-12">
                {navLinks.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="flex items-center gap-2 text-lg font-medium transition-colors hover:opacity-70"
                      style={{ color: active ? "#0a0a0a" : "#555", fontWeight: active ? 700 : 500 }}
                    >
                      {/* Garis aktif di mobile */}
                      <span
                        className="shrink-0 rounded-full transition-all duration-300"
                        style={{
                          width: "3px",
                          height: active ? "20px" : "0px",
                          background: "#0a0a0a",
                          opacity: active ? 1 : 0,
                        }}
                      />
                      {link.label}
                    </a>
                  );
                })}
                <Button
                  className="w-full rounded-lg mt-4 py-6 text-lg font-semibold"
                  onClick={() => { setMobileOpen(false); scrollToSection("#contact"); }}
                >
                  Kontak
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
