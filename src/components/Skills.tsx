"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { IconCloud } from "./IconCloud";

const iconSlugs = [
  "angular",
  "aws",
  "css",
  "git",
  "github",
  "html",
  "intellij",
  "java",
  "javascript",
  "materialui",
  "nextjs",
  "python",
  "react",
  "redux",
  "spring",
  "tailwind",
  "typescript",
  "vscode",
];

const iconNames: Record<string, string> = {
  angular: "Angular",
  aws: "AWS",
  css: "CSS3",
  git: "Git",
  github: "GitHub",
  html: "HTML5",
  intellij: "IntelliJ IDEA",
  java: "Java",
  javascript: "JavaScript",
  materialui: "Material UI",
  nextjs: "Next.js",
  python: "Python",
  react: "React.js",
  redux: "Redux",
  spring: "Spring Boot",
  tailwind: "Tailwind CSS",
  typescript: "TypeScript",
  vscode: "VS Code",
};

export default function Skills() {
  const basePath = process.env.__NEXT_ROUTER_BASEPATH || "";
  const images = iconSlugs.map((slug) => `${basePath}/skill-icons/${slug}.svg`);

  return (
    <section id="skills" className="section-padding overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="Technologies I work with every day to build modern web applications"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[500px]">
          {/* Left Side: 3D Interactive Canvas Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center"
          >
            <IconCloud images={images} />
          </motion.div>

          {/* Right Side: 3D Skill Cards */}
          <div className="flex flex-col justify-center w-full h-full">
            <h3 className="text-2xl font-bold mb-8 text-foreground text-center md:text-left">
              My Arsenal
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4">
              {iconSlugs.map((slug, idx) => (
                <motion.div
                  key={slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.4 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="glass-card p-4 rounded-xl flex flex-col items-center justify-center gap-3 cursor-pointer group hover:bg-white/5 border border-white/5 hover:border-accent/30 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                >
                  <img
                    src={`${basePath}/skill-icons/${slug}.svg`}
                    alt={iconNames[slug]}
                    className="w-10 h-10 object-contain group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] transition-all duration-300"
                  />
                  <span className="text-[10px] md:text-xs font-medium text-foreground-secondary group-hover:text-foreground text-center line-clamp-1 w-full transition-colors">
                    {iconNames[slug]}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
