import React from "react";
import { motion } from "framer-motion";
import { Zap, Code2, Layers, GraduationCap } from "lucide-react";

const highlights = [
  { icon: Zap, title: "Performance First", desc: "40% performance gains through optimization" },
  { icon: Code2, title: "Clean Architecture", desc: "Scalable, maintainable codebases" },
  { icon: Layers, title: "Full Stack", desc: "End-to-end development expertise" },
  { icon: GraduationCap, title: "NIT Durgapur", desc: "B.Tech CSE, 2022 - Present" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2 text-center">About Me</p>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-center mb-6">
            Who I <span className="gradient-text">Am</span>
          </h2>

          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14 leading-relaxed">
            I am a passionate full-stack developer focused on building scalable, high-performance applications. 
            I enjoy solving complex problems, optimizing systems, and creating seamless user experiences. 
            Skilled in object-oriented programming and data modeling, I focus on writing clean, scalable code 
            and delivering exceptional digital experiences through a blend of creativity and technical excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass rounded-xl p-6 text-center hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center group-hover:from-purple-600/30 group-hover:to-blue-600/30 transition-all">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
              <p className="text-muted-foreground text-xs">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}