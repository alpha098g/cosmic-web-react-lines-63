import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Network, Zap, Shield, Globe, Database, Users } from "lucide-react";

const features = [
  {
    icon: Network,
    title: "Intelligent Networking",
    description: "Advanced algorithms that automatically optimize network topology and performance in real-time.",
    badge: "AI-Powered"
  },
  {
    icon: Zap,
    title: "Ultra-Fast Processing",
    description: "Process millions of network events per second with our quantum-optimized infrastructure.",
    badge: "Performance"
  },
  {
    icon: Shield,
    title: "Zero-Trust Security",
    description: "Military-grade encryption and multi-layer security protocols protect your network data.",
    badge: "Security"
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Deploy across continents with our distributed architecture and edge computing capabilities.",
    badge: "Scale"
  },
  {
    icon: Database,
    title: "Smart Analytics",
    description: "Deep insights into network patterns, anomalies, and optimization opportunities.",
    badge: "Analytics"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Real-time collaboration tools for distributed teams managing complex network systems.",
    badge: "Collaboration"
  }
];

const Features = () => {
  return (
    <section className="relative z-10 py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-secondary/50 backdrop-blur-sm">
            Features
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to build, manage, and scale modern network infrastructure
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-elegant transition-all duration-300 group hover:scale-105"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <feature.icon className="w-8 h-8 text-primary group-hover:text-primary-glow transition-colors" />
                  <Badge variant="outline" className="text-xs border-primary/30">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;