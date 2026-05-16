import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiBootstrap, 
  SiJavascript, 
  SiNodedotjs, 
  SiGithub, 
  SiCanva, 
  SiFigma, 
  SiFirebase, 
  SiHtml5, 
  SiCss,
  SiTypescript, 
  SiPhp, 
  SiVite, 
  SiMysql,
  SiLinux,
  SiArduino,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbBrandAdobeIllustrator } from "react-icons/tb";

const skills = [
  { name: "Visual Studio Code", progress: 90, tag: "Tool", icon: VscVscode },
  { name: "React JS", progress: 25, tag: "Framework", icon: SiReact },
  { name: "Next JS", progress: 20, tag: "Framework", icon: SiNextdotjs },
  { name: "Tailwind CSS", progress: 10, tag: "Framework", icon: SiTailwindcss },
  { name: "Bootstrap", progress: 25, tag: "Framework", icon: SiBootstrap },
  { name: "Javascript", progress: 40, tag: "Language", icon: SiJavascript },
  { name: "Node JS", progress: 15, tag: "Backend", icon: SiNodedotjs },
  { name: "Github", progress: 90, tag: "Tool", icon: SiGithub },
  { name: "Adobe Illustrator", progress: 90, tag: "Design", icon: TbBrandAdobeIllustrator },
  { name: "Canva", progress: 90, tag: "Design", icon: SiCanva },
  { name: "Figma", progress: 50, tag: "Design", icon: SiFigma },
  { name: "Firebase", progress: 15, tag: "BaaS", icon: SiFirebase },
  { name: "HTML", progress: 90, tag: "Language", icon: SiHtml5 },
  { name: "CSS", progress: 90, tag: "Language", icon: SiCss },
  { name: "TypeScript", progress: 15, tag: "Language", icon: SiTypescript },
  { name: "PHP", progress: 10, tag: "Backend", icon: SiPhp },
  { name: "Vite", progress: 20, tag: "Tool", icon: SiVite },
  { name: "MySQL", progress: 10, tag: "Database", icon: SiMysql },
  { name: "Linux", progress: 60, tag: "Tool", icon: SiLinux },
  { name: "Arduino IDE", progress: 50, tag: "Tool", icon: SiArduino },
];

// Group skills by category
const groupedSkills = {
  Tool: skills.filter(s => s.tag === "Tool"),
  Language: skills.filter(s => s.tag === "Language"),
  Framework: skills.filter(s => s.tag === "Framework"),
  Backend: skills.filter(s => s.tag === "Backend"),
  Design: skills.filter(s => s.tag === "Design"),
  BaaS: skills.filter(s => s.tag === "BaaS"),
  Database: skills.filter(s => s.tag === "Database"),
};

function SkillCard({ skill, inView, index }: { skill: any, inView: boolean, index: number }) {
  const Icon = skill.icon;
  
  return (
    <motion.div
      className="group bg-white rounded-xl p-3 sm:p-6 border border-stone-300 hover:border-foreground/30 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
      whileHover={{ scale: 1.03 }}
    >
      <div className="flex justify-between items-start mb-3 sm:mb-6">
        <div className="p-2 sm:p-3 bg-white rounded-lg shadow-sm border border-border/50 text-foreground group-hover:scale-110 transition-transform duration-300">
          <Icon size={20} className="sm:hidden" />
          <Icon size={24} className="hidden sm:block" />
        </div>
        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2 sm:px-2.5 py-1 bg-muted rounded-md text-muted-foreground">
          {skill.tag}
        </span>
      </div>
      
      <h3 className="font-bold text-xs sm:text-lg mb-2 sm:mb-4 leading-tight">{skill.name}</h3>
      
      <div className="space-y-2">
        <div className="flex justify-between text-[10px] sm:text-sm font-semibold">
          <span>Kemahiran</span>
          <span className="text-muted-foreground">{skill.progress}%</span>
        </div>
        <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-foreground rounded-full transition-all duration-1000 ease-out"
            style={{ width: inView ? `${skill.progress}%` : "0%" }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.section
      ref={ref}
      id="skills"
      className="py-24 md:py-32 bg-background"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24" ref={sectionRef}>
        <motion.div
          className="mb-12 md:mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-3">Keahlian</h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl font-sans">
              Berbagai alat, bahasa, dan teknologi yang saya kuasai dan jelajahi.
            </p>
          </div>
        </motion.div>

        {/* Categorized Skills */}
        <div className="space-y-14 md:space-y-20">
          {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => (
            <motion.div
              key={category}
              className="category-section"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 + categoryIndex * 0.08 }}
            >
              {/* Category Title with Line */}
              <div className="flex items-center gap-4 mb-5">
                <h3 className="text-base sm:text-xl font-semibold text-foreground uppercase tracking-wide whitespace-nowrap">
                  {category}
                </h3>
                <div className="flex-1 h-[1.5px] bg-border" />
              </div>
              
              {/* Skills Grid — 2 cols on mobile, 3 on md, 4 on xl */}
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
                {categorySkills.map((skill, idx) => (
                  <SkillCard key={idx} skill={skill} inView={inView} index={idx} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
