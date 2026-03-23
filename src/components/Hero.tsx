"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiDownload, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const roles = [
  "Full Stack Developer",
  "React.js Specialist",
  "Node.js Developer",
  "TypeScript Enthusiast",
  "Cloud & DevOps Engineer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && text === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setText(
            isDeleting
              ? currentRole.substring(0, text.length - 1)
              : currentRole.substring(0, text.length + 1)
          );
        },
        isDeleting ? 40 : 80
      );
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding"
    >
      {/* Floating Blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-accent font-mono text-sm md:text-base mb-4 tracking-widest uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Welcome to my portfolio
          </motion.p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Hi, I&apos;m{" "}
            <span className="gradient-text">Aditya Gaurav</span>
          </h1>

          <div className="text-xl md:text-3xl text-foreground-secondary mb-8 h-10 md:h-12 flex items-center justify-center">
            <span className="font-mono">
              {text}
              <span className="typing-cursor" />
            </span>
          </div>

          <motion.p
            className="text-foreground-secondary text-lg md:text-xl max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Building complete end-to-end scalable web applications with 4.5+
            years of professional experience across global enterprises.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.a
              href="#contact"
              className="px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-accent to-accent-secondary hover:shadow-lg hover:shadow-accent/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                <FiMail className="w-5 h-5" />
                Get In Touch
              </span>
            </motion.a>
            <motion.a
              href={`${process.env.__NEXT_ROUTER_BASEPATH || ""}/Aditya_Gaurav.pdf`}
              download="Aditya_Gaurav.pdf"
              className="px-8 py-4 rounded-full font-semibold border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                <FiDownload className="w-5 h-5" />
                Download Resume
              </span>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.a
              href="https://www.linkedin.com/in/adityagaurav~/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card-bg border border-card-border hover:border-accent hover:text-accent transition-all duration-300"
              whileHover={{ scale: 1.15, y: -3 }}
            >
              <FaLinkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://github.com/adityagaurav"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card-bg border border-card-border hover:border-accent hover:text-accent transition-all duration-300"
              whileHover={{ scale: 1.15, y: -3 }}
            >
              <FaGithub className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-accent/50 flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-accent"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
