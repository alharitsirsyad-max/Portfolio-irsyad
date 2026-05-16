import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  SiReact, SiTypescript, SiTailwindcss, SiVite,
  SiArduino, SiNextdotjs, SiHtml5, SiCss, SiJavascript,
  SiFirebase, SiVercel,
} from "react-icons/si";

const tagIconMap: Record<string, React.ElementType> = {
  "React": SiReact,
  "TypeScript": SiTypescript,
  "TailwindCSS": SiTailwindcss,
  "Vite": SiVite,
  "Arduino UNO": SiArduino,
  "Next": SiNextdotjs,
  "HTML": SiHtml5,
  "CSS": SiCss,
  "JavaScript": SiJavascript,
  "Firebase": SiFirebase,
  "Vercel": SiVercel,
  "Arduino IDE": SiArduino,
};

interface Project {
  category: string;
  title: string;
  description: string;
  tags: string[];
  image: string | null;
  link: string;
  comingSoon: boolean;
}

const projects: Project[] = [
  {
    category: "Website Pribadi",
    title: "Website Portfolio",
    description: "Website portfolio pribadi yang dibangun dengan React dan Vite, menampilkan desain editorial yang bersih, tata letak responsif, dan pengalaman pengguna yang mulus.",
    tags: ["React", "TypeScript", "Vite", "TailwindCSS", "Firebase"],
    image: "/project-portfolio.png",
    link: "https://irsyadalharits.web.app/",
    comingSoon: false,
  },
  {
    category: "Website Toko",
    title: "Website Cemal Cemil",
    description: "Website toko camilan modern dengan UI yang bersih, desain responsif, dan interaksi yang mulus untuk menjelajahi produk dan informasi.",
    tags: ["React", "JavaScript", "Vite", "Vercel"],
    image: "/cemal-cemil.png",
    link: "https://cemalcemil-six.vercel.app/",
    comingSoon: false,
  },
  {
    category: "Proyek IoT",
    title: "IoT Smart Trashbin",
    description: "Tempat sampah pintar berbasis IoT yang secara otomatis mendeteksi dan memilah sampah ke tempat yang tepat, dilengkapi pemantauan web opsional.",
    tags: ["Arduino IDE"],
    image: "/project-SmartTrashbin.png",
    link: "https://drive.google.com/drive/folders/1ww5FCrxnD7rSNfVH3G8n39L-pLHDWpxj?usp=drive_link",
    comingSoon: false,
  },
  {
    category: "Website Perusahaan",
    title: "Website Risana",
    description: "Proyek web yang bersih dan modern dengan fokus pada kesederhanaan, responsivitas, dan pengalaman yang ramah pengguna.",
    tags: ["Next", "React", "TypeScript"],
    image: "/project-risana.jpg",
    link: "https://risana-a86f6.web.app",
    comingSoon: false,
  },
  {
    category: "Website Edukasi",
    title: "Website Reformasi",
    description: "Website edukasi interaktif yang menyajikan perjalanan Reformasi Indonesia dari 1998 hingga kini, dilengkapi data presiden, timeline, dan narasi sejarah yang mendalam.",
    tags: ["React", "TypeScript", "Vite", "TailwindCSS", "Firebase"],
    image: "/reformasi.jpeg",
    link: "https://sejarah-reformasi.web.app",
    comingSoon: false,
  },
  {
    category: "Website Edukasi",
    title: "Website Matika°",
    description: "Website edukasi matematika interaktif yang menyajikan materi, latihan soal, dan pembahasan dengan tampilan modern dan ramah pengguna untuk pelajar.",
    tags: ["React", "JavaScript", "Vite", "Firebase"],
    image: "/matika.jpeg",
    link: "https://matika-degree.web.app",
    comingSoon: false,
  },
];

export default function ProjectsAll() {
  const [, setLocation] = useLocation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const handleBack = () => {
    setLocation("/");
    setTimeout(() => {
      document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleCardClick = (project: Project) => {
    if (project.comingSoon || !project.link) return;
    window.open(project.link, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar alwaysBorder />

      {/* Back Button */}
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

      <motion.section
        ref={ref}
        className="py-12 md:py-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
          <motion.div
            className="text-center mb-12 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Portofolio</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-sans">
              Kumpulan proyek yang menampilkan keahlian dan perjalanan pengembangan saya.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                className={`group flex flex-col bg-card border border-border/50 rounded-xl overflow-hidden transition-all duration-300 ${
                  project.comingSoon ? "opacity-70 cursor-default" : "hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 + idx * 0.1 }}
                onClick={() => handleCardClick(project)}
              >
                {/* Gambar: aspect-video (16:9) = proporsi screenshot website portfolio */}
                <div className="w-full aspect-video overflow-hidden shrink-0">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-stone-100 to-stone-200">
                      <span className="text-stone-400 font-semibold text-sm tracking-widest uppercase">Segera Hadir</span>
                    </div>
                  )}
                </div>

                {/* Konten */}
                <div className="p-5 sm:p-6 flex flex-col flex-grow">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                    {project.category}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-3 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed flex-grow mb-5">
                    {project.description}
                  </p>

                  {/* Tags dengan icon — kotak */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5">
                    {project.tags.map((tag) => {
                      const Icon = tagIconMap[tag];
                      return (
                        <div
                          key={tag}
                          className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 rounded-md border border-border text-[10px] sm:text-xs font-semibold text-foreground/75 bg-muted"
                        >
                          {Icon && <Icon className="w-3 sm:w-3.5 h-3 sm:h-3.5 shrink-0" />}
                          <span>{tag}</span>
                        </div>
                      );
                    })}
                  </div>

                  <Button
                    variant="outline"
                    disabled={project.comingSoon}
                    className="w-full rounded-lg font-semibold border-2 group-hover:bg-foreground group-hover:text-background transition-colors duration-300 disabled:opacity-40"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCardClick(project);
                    }}
                  >
                    <span>{project.comingSoon ? "Segera Hadir" : "Detail"}</span>
                    {!project.comingSoon && <ExternalLink className="w-4 h-4 ml-2" />}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
