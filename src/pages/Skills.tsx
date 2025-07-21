import Interactive3DBackground from "@/components/Interactive3DBackground";
import AnimatedNavbar from "@/components/AnimatedNavbar";
import NewSkills from "@/components/NewSkills";
import Footer from "@/components/Footer";

const Skills = () => {
  return (
    <div className="min-h-screen bg-gradient-background">
      <Interactive3DBackground />
      <AnimatedNavbar />
      <div className="relative z-10 pt-16">
        <NewSkills />
        <Footer />
      </div>
    </div>
  );
};

export default Skills;