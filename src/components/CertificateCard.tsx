import { motion } from "framer-motion";
import { Certificate } from "@/data/certificatesData";

interface CertificateCardProps {
  cert: Certificate;
  index: number;
  isInView: boolean;
  onClick: () => void;
}

export default function CertificateCard({ cert, index, isInView, onClick }: CertificateCardProps) {
  return (
    <motion.div
      className="cert-card cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 + index * 0.1 }}
      whileHover={{ scale: 1.03 }}
      onClick={onClick}
    >
      {/* Top-left label - shows organization */}
      <span className="cert-label">{cert.subtitle}</span>

      {/* Image */}
      <motion.div
        className="cert-image-wrap"
        initial={{ scale: 0.98 }}
        whileHover={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <img src={cert.image} alt={cert.title} className="cert-image" />
      </motion.div>

      {/* Hover overlay */}
      <div className="cert-overlay">
        <div className="cert-overlay-content">
          {/* Date first (above title) */}
          <p className="cert-date">{cert.date}</p>
          {/* Title (bold) */}
          <h3 className="cert-title">{cert.title}</h3>
          {/* Description */}
          <p className="cert-desc">{cert.description}</p>
          {/* Instructor (if exists) */}
          {cert.instructor && <p className="cert-instructor">Instructor: {cert.instructor}</p>}
        </div>
      </div>
    </motion.div>
  );
}
