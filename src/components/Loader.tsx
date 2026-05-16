import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{
        background: "linear-gradient(to bottom, #FDFAF0 0%, #FFFFFF 100%)",
      }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Name */}
        <h1
          className="font-serif italic font-medium mb-3"
          style={{
            fontSize: "clamp(48px, 10vw, 80px)",
            color: "#1a1a1a",
            letterSpacing: "-0.02em",
          }}
        >
          Irsyad.
        </h1>

        {/* Tagline */}
        <p
          className="font-sans"
          style={{
            fontSize: "clamp(14px, 2.5vw, 18px)",
            color: "#666",
            fontWeight: 400,
          }}
        >
          Never stop learning, never give up.
        </p>
      </motion.div>
    </motion.div>
  );
}
