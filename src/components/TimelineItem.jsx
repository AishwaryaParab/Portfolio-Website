import React from 'react';
import "./Timeline.css";
import { School } from '@mui/icons-material';
import { Work } from '@mui/icons-material';

const TimelineItem = ({data}) => {  
  return (
    <div className="timeline-item">
        <div className="timeline-content">
            <p className="date">{data.date}</p>
            <p className="ex-name">{data.name}</p>
            <p className="institute">{data.institution}</p>
            <p className="ex-text">{data?.text}</p>

            <span className="circle">
              {data.category==="education" ? <School className="category" /> : <Work className="category" />}
            </span>
        </div>

    </div>
  )
}

export default TimelineItem