import React from 'react';
import "./Skills.css";

const Skill = ({name, per}) => {
  return (
    <div className="skill">
        <div className="skill-name">
            <p>{name}</p>
            <p>{per}%</p>
        </div>

        <div className="bar">
            <div className="inner-bar" style={{width: `${per}%`}}>

            </div>
        </div>
    </div>
  )
}

export default Skill