import React from "react";
import "./Intro.css";
import blob from "../images/blob.svg";
import layers from "../images/layered-waves.png";
import profile from "../images/profile.png";


const Intro = () => {
  // const navbarObserver = new IntersectionObserver((entries) => {
  //     const entry = entries[0];
  //     console.log(entry);
  //     document.body.classList.add("sticky");
  //   }, {
  //     root: null,
  //     threshold: 0
  //   });

  // const navbarObserver = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //         {console.log("Entry is:" + entry.isIntersecting);}
  //         if(entry.isIntersecting) {
  //             document.body.classList.add('sticky');
  //         } else {
  //             document.body.classList.remove('sticky');
  //         }
  //     });
  //   });

  // const heroSection = document.querySelectorAll(".intro-section")
  // navbarObserver.observe(heroSection);

  return (
    <div className="intro">
      <div className="intro-section">
        <div className="intro-content">
          <p>Hello, My name is</p>
          <h1>Aishwarya Parab</h1>

          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Designer</div>
              <div className="i-title-item">Tutor</div>
              <div className="i-title-item">YouTuber</div>
              <div className="i-title-item">Content Writer</div>
            </div>
          </div>

          <p className="i-desc">
            I am passionate about technology and I love to design and develop
            websites, apps and more! My vision is to justify my existence on
            planet Earth by creating an impact in society :-)
          </p>
        </div>

        <div className="intro-profile">
          <div className="border-pic"></div>
          <img src={profile} className="profile" />
        </div>
      </div>

      {/* <div className="scroll-down">
        <Lottie className="scroll-down-animation" animationData={ScrollDown} loop={true} />
      </div> */}
      <img src={layers} className="layers" />
    </div>
  );
};

export default Intro;
