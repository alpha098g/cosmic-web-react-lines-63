import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Palette, Database, Globe, Smartphone, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="w-6 h-6" />,
      color: "text-primary",
      skills: [
        { name: "React/Next.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Vue.js", level: 80 },
        { name: "Tailwind CSS", level: 95 }
      ]
    },
    {
      title: "Backend Development",
      icon: <Database className="w-6 h-6" />,
      color: "text-accent",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "MongoDB", level: 70 }
      ]
    },
    {
      title: "Design & UI/UX",
      icon: <Palette className="w-6 h-6" />,
      color: "text-primary-glow",
      skills: [
        { name: "Figma", level: 85 },
        { name: "Adobe XD", level: 75 },
        { name: "UI Design", level: 90 },
        { name: "Prototyping", level: 80 }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: <Zap className="w-6 h-6" />,
      color: "text-accent",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
        { name: "CI/CD", level: 75 }
      ]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-6 h-6" />,
      color: "text-primary",
      skills: [
        { name: "React Native", level: 80 },
        { name: "Flutter", level: 70 },
        { name: "iOS Development", level: 60 },
        { name: "Android Development", level: 65 }
      ]
    },
    {
      title: "Web Technologies",
      icon: <Globe className="w-6 h-6" />,
      color: "text-primary-glow",
      skills: [
        { name: "GraphQL", level: 75 },
        { name: "REST APIs", level: 90 },
        { name: "WebRTC", level: 70 },
        { name: "WebSockets", level: 80 }
      ]
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg bg-background/50 ${category.color}`}>
                    {category.icon}
                  </div>
                  <CardTitle className="text-foreground text-lg">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-background/50" 
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Always Learning <span className="text-primary">New Technologies</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["AI/Machine Learning", "Blockchain", "WebGL", "Three.js", "GraphQL", "Rust", "Go", "Kubernetes"].map((tech, index) => (
              <span 
                key={index} 
                className="px-4 py-2 text-sm rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;