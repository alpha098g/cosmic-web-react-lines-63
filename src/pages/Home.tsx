import { useState } from "react";
import Interactive3DBackground from "@/components/Interactive3DBackground";
import AnimatedNavbar from "@/components/AnimatedNavbar";
import Hero from "@/components/Hero";
import NewSkills from "@/components/NewSkills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <Loader onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-background">
      <Interactive3DBackground />
      <AnimatedNavbar />
      <Hero />
      <NewSkills />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;