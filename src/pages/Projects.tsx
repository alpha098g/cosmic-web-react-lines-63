import Interactive3DBackground from "@/components/Interactive3DBackground";
import AnimatedNavbar from "@/components/AnimatedNavbar";
import ProjectsSection from "@/components/Projects";
import Footer from "@/components/Footer";

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-background">
      <Interactive3DBackground />
      <AnimatedNavbar />
      <div className="relative z-10 pt-16">
        <ProjectsSection />
        <Footer />
      </div>
    </div>
  );
};

export default Projects;