import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import certificates from "@/data/certificatesData";
import CertificateCard from "@/components/CertificateCard";
import CertificateModal from "@/components/CertificateModal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Certificate } from "@/data/certificatesData";

export default function CertificatesAll() {
  const [, setLocation] = useLocation();
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const handleBack = () => {
    setLocation("/");
    // Scroll to certificates section after navigation
    setTimeout(() => {
      document.querySelector("#certificates")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar - always shows border on this page */}
      <Navbar alwaysBorder />

      {/* Back Button - below navbar with proper spacing */}
      <div
        className="mx-auto pt-28 pb-4"
        style={{
          maxWidth: "1400px",
          paddingLeft: "clamp(12px, 10vw, 160px)",
          paddingRight: "clamp(12px, 10vw, 160px)",
        }}
      >
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Kembali</span>
        </button>
      </div>

      {/* Main Content */}
      <motion.section
        ref={ref}
        className="py-12 md:py-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
          {/* Title Section */}
          <motion.div
            className="text-center mb-12 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Sertifikat</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-sans">
              Kumpulan sertifikasi yang mencerminkan perjalanan belajar dan pertumbuhan teknis saya.
            </p>
          </motion.div>

          {/* Certificates Grid with centered last item */}
          <div className="cert-grid-all">
            {certificates.map((cert, index) => (
              <CertificateCard
                key={cert.id}
                cert={cert}
                index={index}
                isInView={isInView}
                onClick={() => setSelectedCert(cert)}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />

      {/* Modal */}
      <CertificateModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
    </div>
  );
}
