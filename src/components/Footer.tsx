"use client";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-card-border bg-background-secondary">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-foreground-secondary text-sm">
          © {currentYear}{" "}
          <span className="gradient-text font-semibold">Aditya Gaurav</span>.
          All rights reserved.
        </div>

        <div className="flex items-center gap-4">
          <a
            href="mailto:adityagaurav1598@gmail.com"
            className="text-foreground-secondary hover:text-accent transition-colors"
            aria-label="Email"
          >
            <FiMail className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/adityagaurav-/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground-secondary hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/adityagaurav15"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground-secondary hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <FaGithub className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
