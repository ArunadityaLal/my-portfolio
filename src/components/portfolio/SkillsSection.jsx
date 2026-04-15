import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Code2, Layout, Server, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["C", "C++", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["React", "Next.js", "Tailwind CSS", "Redux", "Vite"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "REST APIs", "JWT / OTP Auth"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["PostgreSQL", "Supabase", "Firebase"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "Postman", "Vercel", "VS Code", "Nodemailer"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2 text-center">Expertise</p>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-center mb-14">
            Tech <span className="gradient-text">Stack</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-gradient-to-br from-purple-600/20 to-blue-600/20">
                  <cat.icon className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-poppins font-semibold">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-secondary/80 hover:bg-primary/20 hover:text-primary transition-colors duration-200 text-xs font-normal py-1 px-3"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}