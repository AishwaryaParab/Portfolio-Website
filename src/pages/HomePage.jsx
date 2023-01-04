import React, {useRef} from "react";
import { Navbar, Intro, About, Skills, Timeline, Projects, Download, Footer } from "../components";
import { projects } from "../Data/projects";

const HomePage = () => {
  
  const homeSection = useRef(null);
  const aboutSection = useRef(null);
  const projectSection = useRef(null);

  return (
    <div>
      <Navbar homeSection={homeSection} aboutSection={aboutSection} projectSection={projectSection} />
      <Intro />
      <About aboutSection={aboutSection} />
      <Skills />
      <Timeline />
      <Projects projectSection={projectSection} />
      <Download />
      <Footer homeSection={homeSection} />
    </div>
  );
};

export default HomePage;
