import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail, FolderOpen } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import photo from "@/assets/photo.jpeg"

const roles = [
  "Full Stack Developer",
  "Problem Solver",
  "Performance Optimizer",
  "Clean Code Advocate",
];

const PROFILE_IMAGE = photo;

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && text === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(() => {
        setText(
          isDeleting
            ? currentRole.substring(0, text.length - 1)
            : currentRole.substring(0, text.length + 1)
        );
      }, isDeleting ? 40 : 80);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-12">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm sm:text-base font-medium text-primary tracking-widest uppercase mb-4"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-poppins font-bold text-4xl sm:text-5xl lg:text-7xl mb-4"
            >
              Arunaditya{" "}
              <span className="gradient-text">Lal</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="h-8 sm:h-10 mb-6"
            >
              <span className="text-lg sm:text-xl lg:text-2xl text-muted-foreground font-inter">
                {text}
              </span>
              <span className="inline-block w-0.5 h-5 sm:h-6 bg-primary ml-1 animate-pulse" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground text-sm sm:text-base max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Building scalable, high-performance web applications with clean architecture and intuitive UX.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              <Button
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-2.5 rounded-full font-medium"
              >
                <FolderOpen className="w-4 h-4 mr-2" />
                View Projects
              </Button>
              <Button
                variant="outline"
                asChild
                className="rounded-full px-6 py-2.5 border-border hover:bg-secondary"
              >
                <a href="mailto:arunlal0607@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </a>
              </Button>
              <div className="flex gap-2 ml-2">
                <a href="https://github.com/ArunadityaLal" target="_blank" rel="noopener noreferrer"
                  className="p-2.5 rounded-full border border-border hover:bg-secondary hover:border-primary/50 transition-all duration-200">
                  <FaGithub className="w-4 h-4" />
                </a>
                <a href="https://linkedin.com/in/arunaditya-lal/" target="_blank" rel="noopener noreferrer"
                  className="p-2.5 rounded-full border border-border hover:bg-secondary hover:border-primary/50 transition-all duration-200">
                  <FaLinkedin className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex-shrink-0"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden border-2 border-border">
                <img
                  src={PROFILE_IMAGE}
                  alt="Arunaditya Lal"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown className="w-5 h-5 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}