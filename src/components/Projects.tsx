import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code, Palette, Database, Globe } from "lucide-react";
import { useState } from "react";

// Import project images
import ecommerceImage from "@/assets/project-ecommerce.jpg";
import taskManagerImage from "@/assets/project-taskmanager.jpg";
import designSystemImage from "@/assets/project-designsystem.jpg";
import dashboardImage from "@/assets/project-dashboard.jpg";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      icon: <Globe className="w-6 h-6" />,
      image: ecommerceImage,
      github: "#",
      demo: "#",
      color: "text-primary"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["Vue.js", "Firebase", "Vuex", "CSS3"],
      icon: <Code className="w-6 h-6" />,
      image: taskManagerImage,
      github: "#",
      demo: "#",
      color: "text-accent"
    },
    {
      title: "Design System",
      description: "Comprehensive design system and component library built with Storybook, featuring accessible components and extensive documentation.",
      tech: ["React", "Storybook", "Sass", "TypeScript"],
      icon: <Palette className="w-6 h-6" />,
      image: designSystemImage,
      github: "#",
      demo: "#",
      color: "text-primary-glow"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for data analytics with real-time charts, filters, and export functionality using D3.js and React.",
      tech: ["React", "D3.js", "Python", "FastAPI"],
      icon: <Database className="w-6 h-6" />,
      image: dashboardImage,
      github: "#",
      demo: "#",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-display font-bold text-foreground mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-primary animate-text-shimmer bg-[length:200%_100%]">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Showcase of my recent work and side projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow group overflow-hidden animate-scale-in hover:scale-105 hover:-translate-y-2"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48 group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
                    hoveredProject === index ? 'brightness-110' : 'brightness-90'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button 
                    size="sm" 
                    variant="secondary" 
                    className={`opacity-0 group-hover:opacity-100 transition-all duration-300 bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground ${
                      hoveredProject === index ? 'translate-y-0' : 'translate-y-2'
                    }`}
                    style={{ transitionDelay: '0.1s' }}
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button 
                    size="sm" 
                    variant="secondary" 
                    className={`opacity-0 group-hover:opacity-100 transition-all duration-300 bg-background/80 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground ${
                      hoveredProject === index ? 'translate-y-0' : 'translate-y-2'
                    }`}
                    style={{ transitionDelay: '0.2s' }}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-background/50 ${project.color} transition-all duration-300 group-hover:scale-110`}>
                    {project.icon}
                  </div>
                </div>
                <CardTitle className="text-foreground text-xl mb-2 font-heading group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground font-body leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className={`px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 font-body font-medium transition-all duration-300 hover:bg-primary/20 hover:scale-105 ${
                        hoveredProject === index ? 'animate-fade-in-left' : ''
                      }`}
                      style={{
                        animationDelay: `${techIndex * 0.1}s`
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 font-heading transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 font-heading bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;