import React, {useState, useEffect, useRef} from 'react';
import squareProfile from "../images/square-profile.png";
import Award from './Award';
import "./About.css";
import { awards } from '../Data/awards';

const About = ({aboutSection}) => {
//   let projects = 10;
//   const [projectCount, setProjectCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

//   const tick = () => {
//     setProjectCount((prevCount) => prevCount + 1);
//   }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // {console.log("Entry: " + entry)}
        // {console.log("Entry is:" + entry.isIntersecting);}

        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
  });

  const revealElements = document.querySelectorAll(".hidden");
  revealElements.forEach((el) => observer.observe(el));     

  const revealElementsopp = document.querySelectorAll(".hidden-opp");
  revealElementsopp.forEach((el) => observer.observe(el));
//   observer.observe(myRef.current);


//   useEffect(() => {
//     // {console.log("Inside useeffect")}
//     let interval = null;
//     if(projectCount != projects) {
//         interval = setInterval(tick, 300)
//     }

//     return () => {
//         clearInterval(interval);
//     }
//   }, [projectCount])


  //animating project numbers
//   const counterNum = document.querySelectorAll(".count");
//   const speed = 30;

//   counterNum.forEach((currElement) => {
//     const updateNumber = () => {
//         const targetNumber = parseInt(currElement.dataset.number);
//         const initialNumber = parseInt(currElement.innerText);

//         const incrementNumber = Math.trunc(targetNumber/speed);

//         if(initialNumber < targetNumber) {
//             currElement.innerText = `${initialNumber + incrementNumber}+`;
//             setTimeout(updateNumber, 10);
//         }

//     }
//      updateNumber();
//   })

  const [count, setCount] = useState(0)

  const targetNumber = 30;

  const tickTwo = () => {
    setCount((prevCount) => prevCount + 3);
  }

  useEffect(() => {
    let interval = null;
    if(count < targetNumber) {
        interval = setInterval(tickTwo, 300);
    }

    return () => {
        clearInterval(interval);
    }
  }, [count]);

  const containerRef = useRef(null);
  const [isPresent, setIsPresent] = useState(false);

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0
  }

  useEffect(() => {
    const projectObserver = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsPresent(entry.isInterseccting);
      console.log("Entry" + entry.isIntersecting);
    }, options)

    if(containerRef.current) projectObserver.observe(containerRef.current);

    return () => {
      if(containerRef.current) projectObserver.unobserve(containerRef.current);
    }
  }, [containerRef, options]);


  return (
    <div ref={aboutSection} className="about-me">
        <h3>About Me</h3>
        <p className="know-me">Know me better</p>

        <div ref={containerRef} className="about-section hidden">
            <div className="about-profile">
                <div className="square-bg"></div>
                <div className="square-profile">
                    <img src={squareProfile} />
                </div>

            </div>

            <div className="about-content">
                <h2 className="tagline">Driving innovation through software.</h2>
                <p className="about-desc">Priveleged to work as a software engineer during the day and a tutor during the night. I have a keen interest in full stack development and I’m open for freelance opportunities to keep your websites up and running!</p>
                <div className="project-comp">
                    <h3 className="projects-hidden">{count} +</h3>
                    <p>Projects Completed</p>
                </div>
            </div>


        </div>

        <div className="awards hidden-opp">
            <h3>Honors & Awards</h3>
            
            <div className="awards-array">
                {awards.map((item) => {
                    return <Award key={item.id} name={item.name} />
                })}
            </div>
            
        </div>
    </div>
  )
}

export default About