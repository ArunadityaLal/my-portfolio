import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Software Developer Intern",
    company: "Missing Edge",
    period: "Jul 2025 – Sep 2025",
    description: "AI platforms for healthcare, legal, and enterprise.",
    bullets: [
      "Built core features for a full-stack Scientific Conference Management Platform using Next.js, TypeScript, and PostgreSQL",
      "Handled secure cloud uploads supporting 100+ parallel submissions with real-time dashboards and RBAC",
      "Improved app performance by 40% through lazy loading, code-splitting, and optimized state management",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "Panaka Consumables",
    period: "May 2024 – Jul 2024",
    description: "Direct-to-consumer product sales platform.",
    bullets: [
      "Developed responsive UI components for a D2C e-commerce platform using React",
      "Optimized for approximately 1000 peak users/hour with lazy loading and image optimization",
      "Improved usability and visual consistency across devices with enhanced UX",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2 text-center">Career</p>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-center mb-14">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-border sm:-translate-x-px" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className={`relative flex flex-col sm:flex-row gap-4 sm:gap-8 mb-12 ${
                i % 2 === 0 ? "sm:flex-row-reverse sm:text-right" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 sm:left-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background -translate-x-1.5 sm:-translate-x-1.5 top-6 z-10" />

              {/* Spacer for alternating layout */}
              <div className="hidden sm:block sm:w-1/2" />

              {/* Card */}
              <div className="ml-10 sm:ml-0 sm:w-1/2">
                <div className="glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-xs text-primary font-medium">{exp.period}</span>
                  </div>
                  <h3 className="font-poppins font-semibold text-lg">{exp.role}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{exp.company}</p>
                  <p className="text-xs text-muted-foreground italic mb-4">{exp.description}</p>
                  <ul className={`space-y-2 ${i % 2 === 0 ? "sm:text-left" : ""}`}>
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary mt-1 flex-shrink-0">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}