export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string | null;
  link: string | null;
  linkType: "internal" | "external" | "none";
  comingSoon: boolean;
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio website built with React and Vite, featuring a clean editorial design, responsive layout, and smooth user experience.",
    tags: ["React", "TypeScript", "TailwindCSS"],
    image: "/project-portfolio.png",
    link: "/",
    linkType: "internal",
    comingSoon: false,
  },
  {
    title: "Cemal Cemil Website",
    description: "A modern snack store website with clean UI, responsive design, and smooth interaction for browsing products and information.",
    tags: ["React", "Vite", "TailwindCSS"],
    image: "/project-cemalcemil.png",
    link: "https://cemalcemil-six.vercel.app/",
    linkType: "external",
    comingSoon: false,
  },
  {
    title: "Coming Soon",
    description: "This project is currently under development and will be added soon.",
    tags: ["To be updated"],
    image: null,
    link: null,
    linkType: "none",
    comingSoon: true,
  },
];

export default projects;
