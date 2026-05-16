import { Mail, Instagram, Github } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { useLocation } from "wouter";

const footerLinks = [
  { href: "#hero", label: "Beranda" },
  { href: "#about", label: "Tentang" },
  { href: "#skills", label: "Keahlian" },
  { href: "#projects", label: "Portofolio" },
  { href: "#certificates", label: "Sertifikat" },
  { href: "#contact", label: "Kontak" },
];

export default function Footer() {
  const [location, setLocation] = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionHref: string) => {
    e.preventDefault();
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

  return (
    <footer className="bg-[#0a0a0a] text-white py-10 sm:py-12 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="text-2xl font-serif italic font-medium tracking-tight text-white"
          >
            Irsyad.
          </a>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium text-white/60">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-white transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href="mailto:irsyadabdul999@gmail.com" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-white/60 transition-colors">
              <Mail className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/in/irsyad-abdul-jabbar-al-harits-963b97407" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-white/60 transition-colors">
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a href="https://instagram.com/abdulll78880" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-white/60 transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://github.com/alharitsirsyad-max" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-white/60 transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://wa.me/6289513766615" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-white/60 transition-colors">
              <SiWhatsapp className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-5 border-t border-white/10 text-center text-xs text-white/30">
          © {new Date().getFullYear()} Irsyad. Hak cipta dilindungi.
        </div>
      </div>
    </footer>
  );
}
