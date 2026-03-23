"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaJenkins,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiPostman,
  SiBootstrap,
  SiMaterialdesign,
  SiHtml5,
  SiCss,
} from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";

const skillCategories = [
  {
    title: "Frontend",
    color: "#6c63ff",
    skills: [
      { name: "React.js", icon: FaReact, level: 95 },
      { name: "TypeScript", icon: SiTypescript, level: 90 },
      { name: "JavaScript", icon: SiJavascript, level: 95 },
      { name: "Next.js", icon: SiNextdotjs, level: 85 },
      { name: "Redux / Zustand", icon: SiRedux, level: 88 },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 90 },
      { name: "HTML5", icon: SiHtml5, level: 95 },
      { name: "CSS3", icon: SiCss, level: 92 },
      { name: "Material UI", icon: SiMaterialdesign, level: 85 },
      { name: "Bootstrap", icon: SiBootstrap, level: 88 },
    ],
  },
  {
    title: "Backend",
    color: "#ff6b9d",
    skills: [
      { name: "Node.js", icon: FaNodeJs, level: 90 },
      { name: "Express.js", icon: SiExpress, level: 88 },
    ],
  },
  {
    title: "Database",
    color: "#00d4aa",
    skills: [
      { name: "MongoDB", icon: SiMongodb, level: 85 },
      { name: "PostgreSQL", icon: SiPostgresql, level: 80 },
    ],
  },
  {
    title: "DevOps & Tools",
    color: "#ffa726",
    skills: [
      { name: "Git / GitHub", icon: FaGitAlt, level: 92 },
      { name: "Docker", icon: FaDocker, level: 78 },
      { name: "Azure DevOps", icon: VscAzureDevops, level: 82 },
      { name: "Jenkins", icon: FaJenkins, level: 80 },
      { name: "Postman", icon: SiPostman, level: 90 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="Technologies I work with every day to build modern web applications"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              className="glass-card p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: catIndex * 0.1, duration: 0.5 }}
            >
              <h3
                className="text-xl font-bold mb-6 flex items-center gap-3"
                style={{ color: category.color }}
              >
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ background: category.color }}
                />
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: catIndex * 0.1 + skillIndex * 0.05,
                      duration: 0.4,
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <skill.icon
                          className="w-5 h-5"
                          style={{ color: category.color }}
                        />
                        <span className="text-foreground text-sm font-medium">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-foreground-secondary text-xs font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-skill-bar-bg rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${category.color}, ${category.color}88)`,
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          delay: catIndex * 0.1 + skillIndex * 0.05 + 0.3,
                          duration: 1,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
