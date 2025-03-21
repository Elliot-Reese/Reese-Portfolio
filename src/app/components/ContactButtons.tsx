'use client';

import { Button } from "@/app/ui/button";
import { Github, Linkedin } from "lucide-react";

export function ContactButtons() {
  return (
    <div className="flex justify-center gap-4 mt-4">
      <Button
        variant="outline"
        className="flex items-center gap-2"
        onClick={() => window.open(process.env.NEXT_PUBLIC_LINKEDIN_URL, "_blank")}
      >
        <Linkedin size={20} /> LinkedIn
      </Button>
      <Button 
        variant="outline" 
        className="flex items-center gap-2"
        onClick={() => window.open(process.env.NEXT_PUBLIC_GITHUB_URL, "_blank")}
      >
        <Github size={20} /> GitHub
      </Button>
    </div>
  );
}