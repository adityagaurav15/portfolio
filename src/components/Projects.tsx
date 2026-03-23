"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "Money Mode Exchange System",
    description:
      "A web platform enabling two users to connect and exchange money between themselves (e.g., cash to online transfers). Features user authentication, real-time transaction tracking, and secure payment processing.",
    tags: ["HTML", "CSS", "JavaScript", "SQL"],
    type: "Personal",
  },
  {
    title: "Twitter Sentiment Analysis",
    description:
      "An ML-powered application that analyzes Twitter data to identify sentiment (positive, negative, neutral) from recent tweets. Uses natural language processing techniques for accurate classification.",
    tags: ["Python", "Machine Learning", "HTML", "CSS"],
    type: "Personal",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Projects"
          subtitle="A selection of projects I've built and contributed to"
        />

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="glass-card p-6 flex flex-col h-full group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {/* Project Type Badge */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.type === "Enterprise"
                      ? "bg-accent/10 text-accent"
                      : "bg-accent-secondary/10 text-accent-secondary"
                  }`}
                >
                  {project.type}
                </span>
                <div className="flex gap-2">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="text-foreground-secondary hover:text-accent transition-colors cursor-pointer"
                  >
                    <FiGithub className="w-5 h-5" />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="text-foreground-secondary hover:text-accent transition-colors cursor-pointer"
                  >
                    <FiExternalLink className="w-5 h-5" />
                  </motion.div>
                </div>
              </div>

              <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                {project.title}
              </h3>

              <p className="text-foreground-secondary text-sm leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs rounded-full bg-accent/10 text-accent font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
