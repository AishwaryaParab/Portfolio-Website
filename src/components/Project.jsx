import React from 'react';
import "./Projects.css";
import CodeIcon from '@mui/icons-material/Code';

const Project = ({name, link, img}) => {
  return (
    <div className="project">
        <div className="browser">
            <div className="browser-circle"></div>
            <div className="browser-circle"></div>
            <div className="browser-circle"></div>
        </div>

        <div className="project-img">
            <a href={link} target="_blank">
             <img src={img} alt={name} />
            </a>

            {/* <div className="view">
                <div className="coffee-section">
                    <p>View Project</p>
                    <CodeIcon className="download-icon" />
                </div>
            </div> */}
        </div>

    </div>
  )
}

export default Project