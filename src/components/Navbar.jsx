import React from 'react';
import bgwave from '../images/Vector.svg';
import "./Navbar.css";

const Navbar = ({aboutSection, projectSection, homeSection}) => {

  const scrollDown = (ref) => {
    window.scrollTo({
    top: ref.current.offsetTop,
    behavior: "smooth" });
  };

  const handleResumeDownload = () => {
    fetch("Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);

        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Resume.pdf";
        alink.click();
      });
    });
  };

  return (
    <div ref={homeSection} className="navbar">
        <img src={bgwave} className="nav-wave" />

        <div className="nav-items">
            <li>Home</li>
            <li onClick={() => scrollDown(aboutSection)}>About Me</li>
            <li onClick={() => scrollDown(projectSection)}>Projects</li>
            <li>Contact Me</li>

            <button onClick={handleResumeDownload}>Download CV</button>
        </div>
    </div>
  )
}

export default Navbar;