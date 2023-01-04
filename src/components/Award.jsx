import React from 'react';
import reward from "../images/reward.png";
import "./Award.css";

const Award = ({name}) => {
  return (
    <div className="award-item">
        <div className="award-name">
            <img src={reward} />
            <p>{name}</p>
        </div>
    </div>
  )
}

export default Award