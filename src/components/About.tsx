"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { FiBriefcase, FiAward, FiCode, FiGlobe } from "react-icons/fi";

const stats = [
  { icon: FiBriefcase, value: "4.5+", label: "Years Experience" },
  { icon: FiGlobe, value: "3", label: "Global Companies" },
  { icon: FiCode, value: "10+", label: "Projects Delivered" },
  { icon: FiAward, value: "5+", label: "Awards Won" },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-section-alt">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="About Me"
          subtitle="Passionate about building impactful digital experiences"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Full Stack Developer based in{" "}
              <span className="gradient-text">India</span>
            </h3>
            <div className="space-y-4 text-foreground-secondary leading-relaxed">
              <p>
                I&apos;m a Full Stack Developer with 4.5+ years of
                experience building complete end-to-end scalable web
                applications. I specialize in{" "}
                <span className="text-accent font-medium">React.js</span>,{" "}
                <span className="text-accent font-medium">TypeScript</span>,{" "}
                <span className="text-accent font-medium">Node.js</span>, and
                modern frontend architectures.
              </p>
              <p>
                I&apos;ve had the privilege of working with global
                enterprises including{" "}
                <span className="text-accent font-medium">
                  Tata Consultancy Services
                </span>{" "}
                where I&apos;ve contributed to projects for{" "}
                <span className="text-accent font-medium">
                  Ernst &amp; Young (EY)
                </span>
                ,{" "}
                <span className="text-accent font-medium">
                  Colonial First State (Australia)
                </span>
                , and{" "}
                <span className="text-accent font-medium">
                  Auckland Savings Bank (New Zealand)
                </span>
                .
              </p>
              <p>
                I&apos;m passionate about clean code, component-driven
                design, and delivering seamless user experiences. I hold a{" "}
                <span className="text-accent font-medium">
                  Microsoft Azure AI Engineer (AI-102)
                </span>{" "}
                certification, demonstrating my interest in emerging
                technologies.
              </p>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="glass-card p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <h4 className="text-3xl font-bold gradient-text mb-1">
                  {stat.value}
                </h4>
                <p className="text-foreground-secondary text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
