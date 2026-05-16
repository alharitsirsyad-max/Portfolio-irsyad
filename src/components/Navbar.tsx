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

export default function Navbar({ alwaysBorder = false }: { alwaysBorder?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (sectionHref: string) => {
    const isOnHome = location === "/";

    if (isOnHome) {
      // Already on home, just scroll
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
      // On another page, navigate to home then scroll
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

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled || alwaysBorder ? "rgba(255,255,255,0.82)" : "transparent",
        backdropFilter: scrolled || alwaysBorder ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled || alwaysBorder ? "blur(12px)" : "none",
        borderBottom: scrolled || alwaysBorder ? "1px solid rgba(0,0,0,0.07)" : "1px solid transparent",
        transition: "background 0.3s, border-color 0.3s, backdrop-filter 0.3s",
      }}
    >
      {/* Pakai padding yang sama dengan konten Hero agar sejajar */}
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
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[15px] font-medium transition-colors hover:opacity-70"
              style={{ color: "#1a1a1a" }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Tombol Kontak — pojok kanan sejajar WEB */}
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
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-lg font-medium transition-colors hover:opacity-70"
                  >
                    {link.label}
                  </a>
                ))}
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
