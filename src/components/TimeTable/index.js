import React from 'react';
import './timeTable.css';

import TimeScale from './TimeScale';
import DayRow from './DayRow';
import { WeekDataContext } from '../../App'

function TimeTable() {

  // var currentDaysArray = [1,2,3,4,5,6,7];

  function getDayRows() {
    return (
      <WeekDataContext.Consumer>
        {
          weekData => {
            if(weekData) {
              return weekData.map((dateData,index) => {
                return <DayRow key={'day_'+index} date={parseInt(dateData.dateInString)}></DayRow>
              })
            }
            else {
              return null
            }
          }
        }
      </WeekDataContext.Consumer>
    )
  }

  return (
    <div className="time-table-continer">
      <TimeScale></TimeScale>
      {getDayRows()}
    </div>
  );
}

export default TimeTable;