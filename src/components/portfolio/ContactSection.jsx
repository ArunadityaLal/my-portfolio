import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Copy, Check, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("arunlal0607@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">Get In Touch</p>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl mb-4">
            Let's Build Something{" "}
            <span className="gradient-text">Impactful</span>
          </h2>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            I'm always open to new opportunities, collaborations, and conversations about technology.
            Feel free to reach out — I'd love to connect.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="glass rounded-2xl p-8 sm:p-10"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            <Button
              asChild
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full px-8 py-3 w-full sm:w-auto"
            >
              <a href="mailto:arunlal0607@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Email Me
              </a>
            </Button>
            <Button
              variant="outline"
              onClick={copyEmail}
              className="rounded-full px-6 py-3 border-border w-full sm:w-auto"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 mr-2 text-green-400" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 mr-2" />
                  Copy Email
                </>
              )}
            </Button>
          </div>

          <div className="flex items-center justify-center gap-3 text-muted-foreground">
            <a href="https://github.com/ArunadityaLal" target="_blank" rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:bg-secondary hover:border-primary/50 hover:text-foreground transition-all duration-200">
              <FaGithub className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/arunaditya-lal/" target="_blank" rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:bg-secondary hover:border-primary/50 hover:text-foreground transition-all duration-200">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="tel:+918825273941"
              className="p-3 rounded-full border border-border hover:bg-secondary hover:border-primary/50 hover:text-foreground transition-all duration-200">
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}