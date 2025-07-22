import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const Achievements = () => {
  const achievements = [
    {
      quote: "Successfully developed and deployed 15+ full-stack web applications using React, Node.js, and MongoDB with 99.9% uptime.",
      name: "Full-Stack Development",
      title: "Web Applications"
    },
    {
      quote: "Completed advanced React development certification from Meta, mastering hooks, context, and performance optimization techniques.",
      name: "Meta React Developer",
      title: "Professional Certificate"
    },
    {
      quote: "Led a team of 5 developers to deliver a complex e-commerce platform ahead of schedule, resulting in 40% increase in client satisfaction.",
      name: "Team Leadership",
      title: "Project Management"
    },
    {
      quote: "Achieved AWS Solutions Architect certification, demonstrating expertise in cloud infrastructure and scalable application design.",
      name: "AWS Certified",
      title: "Solutions Architect"
    },
    {
      quote: "Contributed to 20+ open-source projects on GitHub with over 1000 stars combined, helping developers worldwide solve complex problems.",
      name: "Open Source Contributor",
      title: "GitHub Projects"
    },
    {
      quote: "Optimized application performance by 60% through code splitting, lazy loading, and advanced caching strategies.",
      name: "Performance Optimization",
      title: "Technical Excellence"
    }
  ];

  return (
    <section className="py-20 relative z-10 bg-card/20" id="achievements">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Achievements & <span className="text-transparent bg-clip-text bg-gradient-primary">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Milestones and certifications that showcase my journey in web development
          </p>
        </div>
        
        <div className="relative">
          <InfiniteMovingCards
            items={achievements}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

export default Achievements;