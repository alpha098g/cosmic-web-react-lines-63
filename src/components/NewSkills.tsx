import { useState, useEffect } from "react";
import { 
  Code, 
  Palette, 
  Database, 
  Globe, 
  Smartphone, 
  Zap,
  Brain,
  Rocket,
  Shield,
  Cloud
} from "lucide-react";

const NewSkills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const skillCategories = [
    {
      title: "Frontend",
      subtitle: "User Interface",
      icon: <Code className="w-8 h-8" />,
      color: "from-primary to-primary-glow",
      skills: [
        { name: "React", expertise: "Expert", years: "5+" },
        { name: "TypeScript", expertise: "Advanced", years: "4+" },
        { name: "Next.js", expertise: "Advanced", years: "3+" },
        { name: "Tailwind", expertise: "Expert", years: "3+" }
      ]
    },
    {
      title: "Backend",
      subtitle: "Server & Database",
      icon: <Database className="w-8 h-8" />,
      color: "from-accent to-blue-400",
      skills: [
        { name: "Node.js", expertise: "Advanced", years: "4+" },
        { name: "Python", expertise: "Intermediate", years: "3+" },
        { name: "PostgreSQL", expertise: "Advanced", years: "3+" },
        { name: "GraphQL", expertise: "Intermediate", years: "2+" }
      ]
    },
    {
      title: "Design",
      subtitle: "UI/UX & Visual",
      icon: <Palette className="w-8 h-8" />,
      color: "from-pink-500 to-purple-500",
      skills: [
        { name: "Figma", expertise: "Advanced", years: "4+" },
        { name: "UI Design", expertise: "Expert", years: "5+" },
        { name: "Prototyping", expertise: "Advanced", years: "4+" },
        { name: "Design Systems", expertise: "Expert", years: "3+" }
      ]
    },
    {
      title: "DevOps",
      subtitle: "Infrastructure",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-green-500 to-blue-500",
      skills: [
        { name: "Docker", expertise: "Intermediate", years: "2+" },
        { name: "AWS", expertise: "Intermediate", years: "2+" },
        { name: "CI/CD", expertise: "Advanced", years: "3+" },
        { name: "Kubernetes", expertise: "Beginner", years: "1+" }
      ]
    },
    {
      title: "Mobile",
      subtitle: "Cross Platform",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "React Native", expertise: "Advanced", years: "3+" },
        { name: "Flutter", expertise: "Intermediate", years: "2+" },
        { name: "iOS Dev", expertise: "Beginner", years: "1+" },
        { name: "Android Dev", expertise: "Beginner", years: "1+" }
      ]
    },
    {
      title: "AI/ML",
      subtitle: "Intelligence",
      icon: <Brain className="w-8 h-8" />,
      color: "from-violet-500 to-indigo-500",
      skills: [
        { name: "Machine Learning", expertise: "Beginner", years: "1+" },
        { name: "TensorFlow", expertise: "Beginner", years: "1+" },
        { name: "OpenAI APIs", expertise: "Intermediate", years: "1+" },
        { name: "Computer Vision", expertise: "Beginner", years: "1+" }
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % skillCategories.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [skillCategories.length]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getExpertiseColor = (expertise: string) => {
    switch (expertise) {
      case "Expert":
        return "text-green-400";
      case "Advanced":
        return "text-blue-400";
      case "Intermediate":
        return "text-yellow-400";
      case "Beginner":
        return "text-orange-400";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <section className="py-20 relative z-10 overflow-hidden">
      {/* Dynamic background based on mouse position */}
      <div 
        className="absolute inset-0 opacity-20 transition-all duration-1000"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, hsl(var(--primary) / 0.1), transparent 50%)`
        }}
      />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-display font-bold text-foreground mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-primary animate-text-shimmer bg-[length:200%_100%]">Arsenal</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Building digital experiences with cutting-edge technologies
          </p>
        </div>

        {/* Category Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`group relative flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-500 font-heading font-medium ${
                activeCategory === index
                  ? 'bg-card border border-primary/50 shadow-glow scale-105'
                  : 'bg-card/50 border border-border/50 hover:bg-card/80 hover:border-primary/30'
              }`}
              style={{
                animation: `fade-in-left 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} text-white transition-transform duration-300 ${
                activeCategory === index ? 'scale-110' : 'group-hover:scale-105'
              }`}>
                {category.icon}
              </div>
              <div className="text-left">
                <div className="text-foreground font-semibold">{category.title}</div>
                <div className="text-muted-foreground text-sm">{category.subtitle}</div>
              </div>
              
              {/* Active indicator */}
              {activeCategory === index && (
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-primary to-primary-glow rounded-full animate-scale-in" />
              )}
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-card/60 backdrop-blur-lg border border-border/50 rounded-2xl p-8 shadow-elegant">
            <div className="text-center mb-8">
              <div className={`inline-flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r ${skillCategories[activeCategory].color} text-white animate-scale-in`}>
                {skillCategories[activeCategory].icon}
                <div>
                  <h3 className="text-2xl font-display font-bold">
                    {skillCategories[activeCategory].title} Development
                  </h3>
                  <p className="text-white/80 font-body">
                    {skillCategories[activeCategory].subtitle}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className="group relative p-6 bg-background/50 rounded-xl border border-border/30 hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-fade-in"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                      {skill.name}
                    </h4>
                    <span className="text-sm font-body text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                      {skill.years}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-body font-medium ${getExpertiseColor(skill.expertise)}`}>
                      {skill.expertise}
                    </span>
                    <div className="flex gap-1">
                      {[...Array(4)].map((_, i) => (
                        <div 
                          key={i} 
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            i < (skill.expertise === 'Expert' ? 4 : skill.expertise === 'Advanced' ? 3 : skill.expertise === 'Intermediate' ? 2 : 1)
                              ? 'bg-primary shadow-glow' 
                              : 'bg-muted'
                          }`}
                          style={{
                            animationDelay: `${i * 0.1}s`
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Learning Section */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
            Currently <span className="text-primary">Exploring</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Rust", "Go", "WebGL", "Three.js", "Blockchain", "WebRTC", "Serverless", "Edge Computing"].map((tech, index) => (
              <span 
                key={index} 
                className="px-4 py-2 text-sm font-body font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-all duration-300 hover:scale-105 animate-fade-in-left"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
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

export default NewSkills;