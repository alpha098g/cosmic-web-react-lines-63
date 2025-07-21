
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Palette, Database, Globe, Smartphone, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="w-5 h-5" />,
      color: "text-primary",
      skills: ["React/Next.js", "TypeScript", "Vue.js", "Tailwind CSS"]
    },
    {
      title: "Backend Development", 
      icon: <Database className="w-5 h-5" />,
      color: "text-accent",
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB"]
    },
    {
      title: "Design & UI/UX",
      icon: <Palette className="w-5 h-5" />,
      color: "text-primary-glow", 
      skills: ["Figma", "Adobe XD", "UI Design", "Prototyping"]
    },
    {
      title: "DevOps & Tools",
      icon: <Zap className="w-5 h-5" />,
      color: "text-accent",
      skills: ["Git/GitHub", "Docker", "AWS", "CI/CD"]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-5 h-5" />,
      color: "text-primary",
      skills: ["React Native", "Flutter", "iOS Development", "Android Development"]
    },
    {
      title: "Web Technologies",
      icon: <Globe className="w-5 h-5" />,
      color: "text-primary-glow",
      skills: ["GraphQL", "REST APIs", "WebRTC", "WebSockets"]
    }
  ];

  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group hover:scale-105"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 rounded-lg bg-background/50 ${category.color}`}>
                    {category.icon}
                  </div>
                  <CardTitle className="text-foreground text-lg">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex} 
                      className="text-sm text-muted-foreground bg-background/30 px-3 py-2 rounded-md hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
