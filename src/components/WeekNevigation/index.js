import React, { useState } from 'react';
import './weekNevigation.css';

function WeekNevigation(props) {

  const [weekIndex, setWeekIndex] = useState(0)

  function updateWeekIndex(count) {
    let updatedWeekIndex = weekIndex + count;
    props.updateWeekIndex(updatedWeekIndex)
    setWeekIndex(updatedWeekIndex);
  }

  return (
    <div className="week-nevigation-container">
      <div className="link" onClick={() => updateWeekIndex(-1)}>Previous Week</div>
      <div className="link" onClick={() => updateWeekIndex(1)}>Next Week</div> 
    </div>
  );
}

export default WeekNevigation;