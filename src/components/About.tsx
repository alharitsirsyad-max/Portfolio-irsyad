import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const aboutData = {
  keluarga: [
    "Anak pertama dari 4 bersaudara",
    "Ayah: Ponco Mardono",
    "Ibu: Sunarti",
    "Lahir dan besar di Semarang, Jawa Tengah",
    "Keluarga sederhana yang menanamkan kerja keras & tanggung jawab",
  ],
  pendidikan: [
    "SD Negeri Gedawang 02",
    "SMP Negeri 21 Semarang",
    "SMK Negeri 7 Semarang (SIJA = Sistem Informasi Jaringan dan Aplikasi)",
    "Berkomitmen mengembangkan kemampuan dan siap menghadapi tantangan dunia teknologi.",
  ],
  hobi: [
    "Coding",
    "Menjelajahi teknologi baru",
    "Membangun website",
    "Membuat game",
    "Pengembangan IoT",
  ],
  karir: [
    "Bercita-cita menjadi Web Developer profesional",
    "Bercita-cita menjadi Game Developer",
    "Fokus menciptakan solusi digital",
    "Ingin membuat produk yang bermanfaat",
  ],
  kelebihan: [
    "Pemecahan masalah yang baik",
    "Tenang dalam menghadapi masalah",
    "Adaptasi cepat",
    "Semangat belajar tinggi",
    "Konsisten dalam pengembangan diri",
  ],
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      id="about"
      className="py-20 md:py-32"
      style={{
        background: "linear-gradient(to bottom, #FDFAF0 0%, #FDFAF2 20%, #FFFFFF 60%)",
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          {/* Header row */}
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
                Perjalanan dari ketertarikan awal pada teknologi hingga menjadi fokus utama dalam pengembangan karir saya.
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

          {/* Tabs */}
          <Tabs defaultValue="keluarga" className="w-full">
            {/* Tab bar — scroll horizontal di mobile, grid di tablet+ */}
            <div className="overflow-x-auto pb-1 -mx-1 px-1 sm:overflow-visible">
              <TabsList className="inline-flex sm:grid sm:grid-cols-5 w-max sm:w-full h-auto p-1 bg-transparent gap-1.5 sm:gap-2">
                {[
                  { value: "keluarga", label: "Keluarga" },
                  { value: "pendidikan", label: "Pendidikan" },
                  { value: "hobi", label: "Hobi" },
                  { value: "karir", label: "Karir" },
                  { value: "kelebihan", label: "Kelebihan" },
                ].map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="px-3 sm:px-0 w-auto sm:w-full py-2.5 sm:py-3 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-semibold text-xs sm:text-sm transition-all border border-border/50 data-[state=active]:border-primary shadow-none whitespace-nowrap"
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Tab content */}
            <div className="mt-6 bg-card rounded-xl p-6 sm:p-8 md:p-12 border border-border/50 shadow-sm min-h-[260px]">
              {Object.entries(aboutData).map(([key, items]) => (
                <TabsContent
                  key={key}
                  value={key}
                  className="mt-0 focus-visible:outline-none focus-visible:ring-0 animate-in fade-in zoom-in-95 duration-500"
                >
                  <ul className="space-y-3 sm:space-y-4">
                    {items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 sm:gap-4">
                        <span className="inline-flex items-center justify-center min-w-[1.5rem] h-6 rounded-md bg-primary/10 text-primary text-xs font-bold mt-0.5 shrink-0">
                          {idx + 1}
                        </span>
                        <span className="text-base sm:text-lg md:text-xl text-foreground/90 font-medium leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </motion.div>
      </div>
    </motion.section>
  );
}
