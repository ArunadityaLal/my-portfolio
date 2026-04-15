import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Expense Tracker",
    description: "Full-stack expense tracking app with Splitwise-style smart group settlement, real-time sync, OTP auth, and visual analytics dashboards.",
    tech: ["React", "Node.js", "Supabase", "RLS"],
    github: "https://github.com/ArunadityaLal/Expense-Tracker",
    featured: true,
  },
  {
    title: "GitHub Profile Analyzer",
    description: "Visual GitHub analytics dashboard with commit activity tracking, repository statistics, and interactive Recharts-powered charts.",
    tech: ["React", "TypeScript", "GitHub API", "Recharts"],
    github: "https://github.com/ArunadityaLal/GitWit",
    featured: true,
  },
  {
    title: "Interview Prep Platform",
    description: "Full-stack interview preparation platform with admin panel for managing questions, categories, and user progress tracking.",
    tech: ["TypeScript", "Next.js", "PostgreSQL"],
    github: "https://github.com/ArunadityaLal/interviewPrep",
    featured: false,
  },
  {
    title: "Scientific Conference System",
    description: "Conference management platform handling 100+ parallel paper submissions, RBAC dashboards, and secure cloud storage.",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    github: "https://github.com/ArunadityaLal/ScientificConferenceSystem",
    featured: false,
  },
  {
    title: "MakeMyEvent",
    description: "Event management application for creating, organizing, and managing events with a clean, modern interface.",
    tech: ["TypeScript", "React", "Supabase"],
    github: "https://github.com/ArunadityaLal/MakeMyEvent-2025",
    featured: false,
  },
  {
    title: "TalentFlow Mini",
    description: "Lightweight talent and HR management tool for tracking applicants and managing recruitment pipelines.",
    tech: ["JavaScript", "React", "Node.js"],
    github: "https://github.com/ArunadityaLal/TalentFlowMini",
    featured: false,
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2 text-center">Portfolio</p>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-center mb-14">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`glass rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300 group flex flex-col ${
                project.featured ? "ring-1 ring-primary/20" : ""
              }`}
            >
              {/* Gradient top bar */}
              <div className="h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 opacity-60 group-hover:opacity-100 transition-opacity" />

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-poppins font-semibold text-lg">{project.title}</h3>
                  {project.featured && (
                    <Badge className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-primary border-primary/20 text-xs flex-shrink-0 ml-2">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <Badge key={t} variant="secondary" className="text-xs font-normal bg-secondary/80">
                      {t}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild className="rounded-full text-xs">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub className="w-3.5 h-3.5 mr-1.5" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}