import React from 'react';
import { roadmap } from '../Data/roadmap';
import TimelineItem from './TimelineItem';
import "./Timeline.css";

const Timeline = () => {  
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            {console.log("Entry: " + entry)}
            {console.log("Entry is:" + entry.isIntersecting);}
    
            if(entry.isIntersecting) {
                entry.target.classList.add('show-timeline');
            } else {
                entry.target.classList.remove('show-timeline');
            }
        });
      });
    
    const revealTimeline = document.querySelectorAll(".timeline-hidden");
    revealTimeline.forEach((el) => observer.observe(el)); 

  return (
    <div className="timeline">
         <h3>My Road to Glory</h3>
         <p className="road-glory">See how far I've come</p>

         <div className="timeline-section">
            {roadmap.map((item, index) => {
                return <TimelineItem key={index} data={item} />
            })}
         </div>
    </div>
  )
}

export default Timeline