
import { PinContainer } from "@/components/ui/3d-pin";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code, Palette, Database, Globe } from "lucide-react";

// Import project images
import ecommerceImage from "@/assets/project-ecommerce.jpg";
import taskManagerImage from "@/assets/project-taskmanager.jpg";
import designSystemImage from "@/assets/project-designsystem.jpg";
import dashboardImage from "@/assets/project-dashboard.jpg";

const Projects = () => {
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
        <div className="text-center mb-16">
          <h2 className="text-5xl font-display font-bold text-foreground mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Showcase of my recent work and side projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="h-[40rem] w-full flex items-center justify-center">
              <PinContainer
                title={project.title}
                href={project.demo}
              >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-foreground">
                    {project.title}
                  </h3>
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-muted-foreground text-sm">
                      {project.description}
                    </span>
                  </div>
                  <div className="flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-wrap gap-1 mt-4">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-2 py-1 text-xs rounded bg-primary/20 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </Button>
                    <Button size="sm" className="flex-1 bg-gradient-primary">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Demo
                    </Button>
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
