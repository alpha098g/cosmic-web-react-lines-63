
import { useState } from "react";
import VantaBackground from "@/components/VantaBackground";
import AnimatedNavbar from "@/components/AnimatedNavbar";
import HeroWithName from "@/components/HeroWithName";
import About from "@/components/About";
import NewSkills from "@/components/NewSkills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <Loader onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-black">
      <VantaBackground />
      <div className="relative z-10">
        <AnimatedNavbar />
        <HeroWithName />
        <About />
        <NewSkills />
        <Projects />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
