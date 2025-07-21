import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Code, Github, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Code className="w-6 h-6 text-primary" />
              <span className="font-bold text-lg">Portfolio</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Creative developer building exceptional digital experiences with modern web technologies.
            </p>
            <div className="flex gap-3">
              <Github className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-accent cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-foreground cursor-pointer transition-colors">Home</Link></li>
              <li><Link to="/projects" className="hover:text-foreground cursor-pointer transition-colors">Projects</Link></li>
              <li><Link to="/skills" className="hover:text-foreground cursor-pointer transition-colors">Skills</Link></li>
              <li className="hover:text-foreground cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Technologies</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-foreground cursor-pointer transition-colors">React</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">TypeScript</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">Node.js</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">Three.js</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-foreground cursor-pointer transition-colors">Email</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">LinkedIn</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">GitHub</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">Resume</li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-border/50" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Portfolio. Built with React & Three.js
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <span className="hover:text-foreground cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-foreground cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;