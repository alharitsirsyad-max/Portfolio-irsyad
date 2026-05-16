export interface Certificate {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  image: string;
  type: "image" | "pdf";
  instructor?: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Clash of Minds 2026",
    subtitle: "Universitas Diponegoro",
    description: "Partisipasi dalam Clash of Minds 2026 di Universitas Diponegoro.",
    date: "07 Maret 2026",
    image: "/cert-clash-of-minds.jpg",
    type: "image",
  },
  {
    id: 2,
    title: "IT Essentials",
    subtitle: "Cisco Networking Academy",
    description: "Berhasil menyelesaikan program IT Essentials di SMK Negeri 7 Semarang melalui Cisco Networking Academy.",
    instructor: "Hari Seputro",
    date: "11 Feb 2025",
    image: "/cert-cisco-it-essentials.png",
    type: "image",
  },
  {
    id: 3,
    title: "Hour of Code",
    subtitle: "Code.org / Minecraft",
    description: "Menyelesaikan program Hour of Code dan menunjukkan pemahaman konsep dasar ilmu komputer.",
    date: "2024",
    image: "/cert-hour-of-code.jpg",
    type: "image",
  },
  {
    id: 4,
    title: "Hour of Code",
    subtitle: "Code.org / Minecraft",
    description: "Menyelesaikan program Hour of Code dan menunjukkan pemahaman konsep dasar ilmu komputer.",
    date: "2024",
    image: "/cert-hour-of-code2.jpg",
    type: "image",
  },
  {
    id: 5,
    title: "Hour of Code",
    subtitle: "Code.org / Minecraft",
    description: "Menyelesaikan program Hour of Code dan menunjukkan pemahaman konsep dasar ilmu komputer.",
    date: "2024",
    image: "/cert-hour-of-code3.jpg",
    type: "image",
  },
  {
    id: 6,
    title: "Hour of Code",
    subtitle: "Code.org / Minecraft",
    description: "Menyelesaikan program Hour of Code dan menunjukkan pemahaman konsep dasar ilmu komputer.",
    date: "2024",
    image: "/cert-hour-of-code4.jpg",
    type: "image",
  },
  {
    id: 7,
    title: "Hour of Code",
    subtitle: "Code.org / Minecraft",
    description: "Menyelesaikan program Hour of Code dan menunjukkan pemahaman konsep dasar ilmu komputer.",
    date: "2024",
    image: "/cert-hour-of-code5.jpg",
    type: "image",
  },
];

export default certificates;
