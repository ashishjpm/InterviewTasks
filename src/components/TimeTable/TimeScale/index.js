import React from 'react';
import './timeScale.css';


function TimeScale() {

  function getTimeFromHour (hour) {
    if(hour===0) return ""
    else if(hour<1200) return hour/100 + "AM"
    else if(hour===1200) return "12 PM"
    else if(hour>1200) return hour/100-12 + "PM"
    return '';
  }

  function getTimeSlabJsx() {
    return (
      [...Array(24)].map((e, i) => <div className="time-scale-card" key={i}>
        <div className="time-text">{getTimeFromHour(i*100)}</div>
        <div className="time-text-border"></div>
      </div>)
    )
  }

  return (
    <div className="time-scale-container">
      {getTimeSlabJsx()}

    </div>
  );
}

export default TimeScale;