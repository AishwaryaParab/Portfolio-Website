import React from 'react';
import Skill from './Skill';
import { skills } from '../Data/skills';

const Skills = () => {
  return (
    <div className="skills">
        <h3>Skills</h3>
        <p className="skill-para">What am I good at?</p>

        <div className="skills-section">
            {skills.map((item) => {
                return <Skill name={item.name} per={item.per} />
            })}
        </div>
    </div>
  )
}

export default Skills