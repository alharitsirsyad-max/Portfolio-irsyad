import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLocation } from "wouter";
import certificatesData from "@/data/certificatesData";
import CertificateCard from "@/components/CertificateCard";

// Only show first 3 certificates on main page
const certificates = certificatesData.slice(0, 3);

export default function Certificates() {
  const [, setLocation] = useLocation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const handleMoreCertificates = () => {
    setLocation("/certificates");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.section
      ref={ref}
      id="certificates"
      className="py-24 md:py-32 bg-background"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
        <motion.div
          className="mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-3">Sertifikat</h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl font-sans">
            Pencapaian dan sertifikasi yang telah saya peroleh.
          </p>
        </motion.div>

        <div className="cert-grid">
          {certificates.map((cert, i) => (
            <CertificateCard 
              key={cert.id} 
              cert={cert} 
              index={i} 
              isInView={isInView}
              onClick={() => {}} // No modal on main page
            />
          ))}
        </div>

        {/* More Certificates Button */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
        >
          <Button
            variant="outline"
            className="rounded-lg px-8 py-6 text-base font-semibold border-2 hover:bg-foreground hover:text-background transition-all duration-300 group"
            onClick={handleMoreCertificates}
          >
            <span>Lihat Semua Sertifikat</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
