import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLocation } from "wouter";
import {
  SiReact, SiTypescript, SiTailwindcss, SiVite,
  SiArduino, SiNextdotjs, SiHtml5, SiCss, SiJavascript,
  SiFirebase, SiVercel,
} from "react-icons/si";

// Map nama tag ke icon
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

// Semua proyek — urutan: 3 yang ditampilkan di halaman utama dulu
const allProjects = [
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
    category: "Website Pribadi",
    title: "Website Portfolio",
    description: "Website portfolio pribadi yang dibangun dengan React dan Vite, menampilkan desain editorial yang bersih, tata letak responsif, dan pengalaman pengguna yang mulus.",
    tags: ["React", "TypeScript", "Vite", "TailwindCSS", "Firebase"],
    image: "/project-portfolio.png",
    link: "https://irsyadalharits.web.app/",
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
];

// Hanya 3 pertama ditampilkan di halaman utama
const projects = allProjects.slice(0, 3);

function ProjectCard({
  project,
  idx,
  isInView,
  onClick,
}: {
  project: typeof projects[0];
  idx: number;
  isInView: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      className={`group flex flex-col bg-card border border-border/50 rounded-xl overflow-hidden transition-all duration-300 ${
        project.comingSoon ? "opacity-70 cursor-default" : "hover:shadow-xl hover:-translate-y-1 cursor-pointer"
      }`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 + idx * 0.1 }}
      onClick={onClick}
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

      {/* ── Konten ── */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        {/* Kategori */}
        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
          {project.category}
        </p>

        {/* Judul */}
        <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-3 leading-tight">
          {project.title}
        </h3>

        {/* Deskripsi */}
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

        {/* Tombol Detail */}
        <Button
          variant="outline"
          disabled={project.comingSoon}
          className="w-full rounded-lg font-semibold border-2 group-hover:bg-foreground group-hover:text-background transition-colors duration-300 disabled:opacity-40"
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
        >
          <span>{project.comingSoon ? "Segera Hadir" : "Detail"}</span>
          {!project.comingSoon && <ExternalLink className="w-4 h-4 ml-2" />}
        </Button>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [, setLocation] = useLocation();

  const handleCardClick = (project: typeof projects[0]) => {
    if (project.comingSoon || !project.link) return;
    window.open(project.link, "_blank");
  };

  return (
    <motion.section
      ref={ref}
      id="projects"
      className="py-24 md:py-32 bg-white"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
        <motion.div
          className="mb-12 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-3">Portofolio</h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl font-sans">
            Beberapa karya yang telah saya bangun di bidang pengembangan web dan game.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10">
          {projects.map((project, idx) => (
            <ProjectCard
              key={idx}
              project={project}
              idx={idx}
              isInView={isInView}
              onClick={() => handleCardClick(project)}
            />
          ))}
        </div>

        {/* Tombol Lihat Semua */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
        >
          <Button
            variant="outline"
            className="rounded-lg px-8 py-6 text-base font-semibold border-2 hover:bg-foreground hover:text-background transition-all duration-300 group"
            onClick={() => {
              setLocation("/projects/all");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <span>Lihat Semua Portofolio</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
