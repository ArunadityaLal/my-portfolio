import React from "react";
import { motion } from "framer-motion";
import { Trophy, Star, Target, Award } from "lucide-react";

const achievements = [
  {
    icon: Star,
    title: "CodeChef 4★",
    desc: "Peak rating of 1838",
    color: "from-yellow-500/20 to-orange-500/20",
  },
  {
    icon: Target,
    title: "750+ DSA Problems",
    desc: "Solved across multiple platforms",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Trophy,
    title: "AIR 8602",
    desc: "JEE Mains 2022 · Qualified JEE Advanced",
    color: "from-purple-500/20 to-blue-500/20",
  },
  {
    icon: Award,
    title: "INMO Qualified",
    desc: "Indian National Mathematical Olympiad 2020",
    color: "from-pink-500/20 to-rose-500/20",
  },
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2 text-center">Milestones</p>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-center mb-14">
            Key <span className="gradient-text">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass rounded-xl p-6 text-center hover:border-primary/30 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="font-poppins font-semibold mb-1">{item.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}