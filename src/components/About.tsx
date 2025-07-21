
import { Timeline } from "@aceternity/ui/timeline";

const About = () => {
  const timelineData = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-muted-foreground text-sm md:text-base font-normal mb-8">
            Focused on mastering modern web technologies including React, TypeScript, and Next.js. 
            Built multiple full-stack applications and contributed to open-source projects.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-card/50 p-4 rounded-lg border border-border">
              <h4 className="text-primary font-semibold">Full-Stack Development</h4>
              <p className="text-muted-foreground text-sm">React, Node.js, MongoDB</p>
            </div>
            <div className="bg-card/50 p-4 rounded-lg border border-border">
              <h4 className="text-primary font-semibold">UI/UX Design</h4>
              <p className="text-muted-foreground text-sm">Figma, Design Systems</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <p className="text-muted-foreground text-sm md:text-base font-normal mb-8">
            Expanding expertise into AI/ML integration, advanced 3D web experiences, and 
            enterprise-level application architecture. Focusing on performance optimization and scalability.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-card/50 p-4 rounded-lg border border-border">
              <h4 className="text-accent font-semibold">AI Integration</h4>
              <p className="text-muted-foreground text-sm">OpenAI APIs, Machine Learning</p>
            </div>
            <div className="bg-card/50 p-4 rounded-lg border border-border">
              <h4 className="text-accent font-semibold">3D Web Experiences</h4>
              <p className="text-muted-foreground text-sm">Three.js, WebGL</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Future Goals",
      content: (
        <div>
          <p className="text-muted-foreground text-sm md:text-base font-normal mb-8">
            Aiming to become a technical lead in innovative web development projects, 
            contributing to cutting-edge technologies and mentoring the next generation of developers.
          </p>
          <div className="bg-gradient-primary/10 p-4 rounded-lg border border-primary/20">
            <h4 className="text-primary-glow font-semibold">Vision</h4>
            <p className="text-muted-foreground text-sm">Building the future of web experiences</p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-primary">Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A timeline of my development journey and future aspirations
          </p>
        </div>
        <Timeline data={timelineData} />
      </div>
    </section>
  );
};

export default About;
