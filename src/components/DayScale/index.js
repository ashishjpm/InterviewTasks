import React from 'react';
import './dayScale.css';

import { WeekDataContext } from '../../App'
import { getStringDate } from '../../util'

function DayScale() {

  function getDateJsx() {
    return [...Array(7)].map((e,i) => (
      <WeekDataContext.Consumer key={'WeekData_'+i}>
        {
          weekData => {
            const today = new Date();
            if(weekData[i]) {
              let isCurrentDate = weekData[i].dateInString === getStringDate(today);
              return (
                <div className="date-display" key={'date_'+i}>
                  <div className="day-text">
                    <div className={(isCurrentDate ? 'today' : '')}>{weekData[i].day}</div>
                  </div>
                  <div className="date-text">
                    <div className={(isCurrentDate ? 'today' : '')}>{weekData[i].date.getDate()}</div>
                  </div>
                </div>
              )
            }
            else {
              return null
            }
          }
        }
      </WeekDataContext.Consumer>
    ))
  }

  return (
    <div className="day-scale-container">
      <div className="empty-day-scale-element"></div>
      {getDateJsx()}
    </div>
  );
}

export default DayScale;