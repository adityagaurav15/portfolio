"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { FiCalendar, FiMapPin } from "react-icons/fi";

const experiences = [
  {
    company: "EY (Ernst & Young)",
    role: "Full Stack Developer",
    via: "Tata Consultancy Services",
    location: "India",
    period: "July 2024 – Present",
    description: [
      "Contributing to multiple projects from scratch including the Onboarding Portal, Access Management Application, and Report Dashboard Application.",
      "Utilized React.js, JavaScript, MobX UI and Redux for the Onboarding Portal, while implementing features in the Access Management and Report Dashboard Applications using Angular, along with Bootstrap 5 and Angular Material for styling and component design.",
      "Architected and implemented Role-Based Access Control (RBAC) mechanisms to secure sensitive API endpoints and restrict data access based on user privileges.",
      "Collaborated with the client to develop reusable UI components, streamlining the development process and ensuring consistency across the applications.",
      "Used Git for version control and Jenkins for automating the deployment process, ensuring continuous integration and delivery.",
    ],
  },
  {
    company: "Colonial First State",
    role: "Frontend Developer",
    via: "Tata Consultancy Services",
    location: "Australia (Remote)",
    period: "Feb 2023 – Jun 2024",
    description: [
      "Developed the Super to Pension application from scratch utilizing React.js, TypeScript, and collaborating on Node.js backend services, with Zustand for state management.",
      "Implemented unit testing using Jest and Vitest, developed reusable and custom components, enabling the team to efficiently create pages and maintain consistency across the application.",
      "Leveraged Tailwind CSS to enhance UI aesthetics and ensure design scalability.",
      "Collaborated closely with clients to gather requirements and worked alongside designers to build a fully responsive design compatible with various devices.",
      "Migrated code to an improved base, by properly maintaining code repositories and documented the detailed code analysis using Confluence per industry standards.",
    ],
  },
  {
    company: "Auckland Savings Bank",
    role: "Frontend Developer",
    via: "Tata Consultancy Services",
    location: "New Zealand (Remote)",
    period: "Aug 2021 – Jan 2023",
    description: [
      "Collaborated with a team to develop a Securities Application using React and TypeScript. Contributed to both wireframe design and building the application from scratch.",
      "Utilized React with TypeScript for the frontend, Redux for state management, Material UI for consistent design, and SASS for optimized CSS styling.",
      "Played a key role in migrating the application from VB to .NET, significantly improving performance and maintainability by integrating RESTful APIs into the React application.",
      "Leveraged Azure Cloud for deploying the application via a CI/CD pipeline and used Git for version control.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-section-alt">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="Work Experience"
          subtitle="My professional journey across global enterprises"
        />

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent-secondary to-accent transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={`relative mb-12 md:mb-16 pl-8 md:pl-0 ${
                index % 2 === 0
                  ? "md:pr-[calc(50%+2rem)] md:text-right"
                  : "md:pl-[calc(50%+2rem)]"
              }`}
            >
              {/* Timeline Dot */}
              <motion.div
                className={`absolute top-2 w-4 h-4 rounded-full border-4 border-accent bg-background z-10 left-[-7px] md:left-1/2 md:-translate-x-1/2`}
                whileInView={{ scale: [0, 1.3, 1] }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.2, duration: 0.4 }}
              />

              <div className="glass-card p-6 md:p-8">
                <div
                  className={`flex flex-col gap-2 mb-4 ${
                    index % 2 === 0 ? "md:items-end" : "md:items-start"
                  }`}
                >
                  <h3 className="text-xl font-bold text-foreground">
                    {exp.company}
                  </h3>
                  <p className="text-accent font-semibold">{exp.role}</p>
                  <p className="text-foreground-secondary text-sm italic">
                    via {exp.via}
                  </p>
                  <div
                    className={`flex gap-4 text-foreground-secondary text-sm flex-wrap ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    <span className="flex items-center gap-1">
                      <FiCalendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiMapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul
                  className={`space-y-2 text-foreground-secondary text-sm leading-relaxed ${
                    index % 2 === 0 ? "md:text-right" : ""
                  }`}
                >
                  {exp.description.map((desc, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-accent mt-1 shrink-0">▹</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
