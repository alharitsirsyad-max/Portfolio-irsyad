import { Download, GraduationCap, Target, Users, Heart, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const educationData = [
  {
    institution: "SMK Negeri 7 Semarang",
    major: "Sistem Informasi Jaringan dan Aplikasi (SIJA)",
    period: "2024 - Sekarang",
    status: "current",
  },
  {
    institution: "SMP Negeri 21 Semarang",
    major: "",
    period: "2021 - 2024",
    status: "completed",
  },
  {
    institution: "SD Negeri Gedawang 02",
    major: "",
    period: "2015 - 2021",
    status: "completed",
  },
];

const careerGoals = [
  "Menjadi Full-Stack Web Developer profesional",
  "Mengembangkan game yang bermanfaat dan menghibur",
  "Berkontribusi pada proyek open-source",
  "Terus belajar dan menguasai teknologi terbaru",
];

const backgroundInfo = [
  "Anak pertama dari 4 bersaudara",
  "Lahir dan besar di Semarang, Jawa Tengah",
  "Keluarga yang mendukung pengembangan karir di teknologi",
];

const softSkills = [
  "Pemecahan Masalah",
  "Cepat Belajar",
  "Kerja Tim",
  "Manajemen Waktu",
  "Adaptif",
  "Berpikir Kritis",
  "Motivasi Diri",
  "Perhatian Detail",
];

const hardSkills = [
  "Programming",
  "Graphic Design",
  "Networking",
  "Network Security",
];

const interests = [
  "Front-End Development",
  "Back-End Development",
  "Full-Stack Development",
  "Game Development",
  "UI/UX Design",
  "IoT & Embedded Systems",
  "Software Engineering",
  "Mobile Development",
];

const hobbies = [
  "Coding",
  "Building Projects",
  "Exploring New Tech",
  "Problem Solving",
  "Learning Online",
  "Tech Communities",
  "Open Source",
  "Experimenting",
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      id="about"
      className="py-20 md:py-32 relative z-20"
      style={{
        background: "linear-gradient(to bottom, #FDFAF0 0%, #FDFAF2 20%, #FFFFFF 60%)",
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-10">
            <div>
              <motion.h2
                className="text-4xl md:text-6xl font-serif font-bold mb-3"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              >
                Tentang Saya
              </motion.h2>
              <p className="text-base md:text-xl text-muted-foreground max-w-2xl font-sans">
                Perjalanan, keahlian, dan aspirasi saya dalam dunia teknologi
              </p>
            </div>
            <a href="/cv.pdf" download className="shrink-0 self-start sm:self-center">
              <Button
                variant="outline"
                className="rounded-lg px-5 py-4 font-semibold flex items-center gap-2 whitespace-nowrap"
              >
                <Download className="w-4 h-4" />
                Unduh CV
              </Button>
            </a>
          </div>

          {/* Introduction Card */}
          <motion.div
            className="bg-card rounded-xl p-6 sm:p-8 border border-border/50 shadow-sm mb-8 hover:border-foreground transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          >
            <p className="text-base sm:text-lg md:text-xl text-foreground/90 leading-relaxed">
              Siswa SMK jurusan <span className="font-semibold">Sistem Informasi Jaringan dan Aplikasi</span> dengan passion di{" "}
              <span className="font-semibold">Web Development</span> dan <span className="font-semibold">Game Development</span>. 
              Memiliki pengalaman dalam membangun aplikasi web modern menggunakan teknologi terkini dan terus mengembangkan 
              kemampuan teknis melalui project pribadi serta eksplorasi teknologi baru.
            </p>
          </motion.div>

          {/* Two Column Layout */}
          <div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
          >
            {/* Left Column */}
            <div className="flex flex-col gap-6 md:gap-8">
              {/* Education */}
              <motion.div
                className="bg-card rounded-xl p-6 sm:p-8 border border-border/50 shadow-sm hover:border-foreground transition-colors duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold">Pendidikan</h3>
                </div>
                <div className="space-y-6">
                  {educationData.map((edu, idx) => (
                    <div key={idx} className="relative pl-6 border-l-2 border-border/50 last:border-l-0">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-2 border-background" />
                      <div className="pb-2">
                        <p className="text-xs sm:text-sm font-semibold text-primary mb-1">{edu.period}</p>
                        <h4 className="text-base sm:text-lg font-bold text-foreground mb-1">{edu.institution}</h4>
                        {edu.major && (
                          <p className="text-sm sm:text-base text-muted-foreground">{edu.major}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Background */}
              <motion.div
                className="bg-card rounded-xl p-6 sm:p-8 border border-border/50 shadow-sm hover:border-foreground transition-colors duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold">Latar Belakang</h3>
                </div>
                <ul className="space-y-3">
                  {backgroundInfo.map((info, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-sm sm:text-base text-foreground/90 leading-relaxed">{info}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Interests */}
              <motion.div
                className="bg-card rounded-xl p-6 sm:p-8 border border-border/50 shadow-sm flex-1 hover:border-foreground transition-colors duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Lightbulb className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold">Minat</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, idx) => (
                    <motion.span
                      key={idx}
                      className="px-3 sm:px-4 py-2 bg-muted text-foreground rounded-full text-xs sm:text-sm font-medium border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-colors"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3, ease: "easeOut", delay: 0.7 + idx * 0.05 }}
                    >
                      {interest}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-6 md:gap-8">
              {/* Career Goals */}
              <motion.div
                className="bg-card rounded-xl p-6 sm:p-8 border border-border/50 shadow-sm hover:border-foreground transition-colors duration-300"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold">Tujuan Karir</h3>
                </div>
                <ul className="space-y-3">
                  {careerGoals.map((goal, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="inline-flex items-center justify-center min-w-[1.5rem] h-6 rounded-md bg-primary/10 text-primary text-xs font-bold mt-0.5 shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-sm sm:text-base text-foreground/90 leading-relaxed">{goal}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Hard Skills */}
              <motion.div
                className="bg-card rounded-xl p-6 sm:p-8 border border-border/50 shadow-sm hover:border-foreground transition-colors duration-300"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold">Hard Skills</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {hardSkills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      className="px-3 sm:px-4 py-3 bg-primary/10 text-primary rounded-lg text-xs sm:text-sm font-semibold border border-primary/20 hover:bg-primary/20 transition-colors text-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3, ease: "easeOut", delay: 0.6 + idx * 0.05 }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Soft Skills */}
              <motion.div
                className="bg-card rounded-xl p-6 sm:p-8 border border-border/50 shadow-sm hover:border-foreground transition-colors duration-300"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold">Soft Skills</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((skill, idx) => (
                    <motion.span
                      key={idx}
                      className="px-3 sm:px-4 py-2 bg-muted text-foreground rounded-full text-xs sm:text-sm font-semibold border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-colors"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3, ease: "easeOut", delay: 0.7 + idx * 0.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Hobbies */}
              <motion.div
                className="bg-card rounded-xl p-6 sm:p-8 border border-border/50 shadow-sm flex-1 hover:border-foreground transition-colors duration-300"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold">Hobi</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {hobbies.map((hobby, idx) => (
                    <motion.span
                      key={idx}
                      className="px-3 sm:px-4 py-2 bg-muted text-foreground rounded-full text-xs sm:text-sm font-medium border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-colors"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3, ease: "easeOut", delay: 0.9 + idx * 0.05 }}
                    >
                      {hobby}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
