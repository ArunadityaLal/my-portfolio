import React from "react";
import { FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import ArunadityaLalResume from "@/assets/ArunadityaLalResume.pdf"

const RESUME_URL = ArunadityaLalResume;

export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Arunaditya Lal. All rights reserved.
        </p>
        <Button variant="outline" size="sm" asChild className="rounded-full text-xs">
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
            <FileDown className="w-3.5 h-3.5 mr-1.5" />
            Download Resume
          </a>
        </Button>
      </div>
    </footer>
  );
}