import React from 'react';
import './dayRow.css';

import TimeCell from './TimeCell';
import {AppointmentContext} from '../../../App'

function DayRow(props) {

  var date = props.date;

  function getAppointmentsList(date, time, appointments) {
    var appointmentsByDate = appointments[date] || [];
    return appointmentsByDate.filter((appointment) => ((appointment.from >= time*100) && (appointment.from < (time+1)*100)))
  }

  function getTimeCells() {
    return (
      [...Array(24)].map((e, i) => (
        <AppointmentContext.Consumer key={'TimeCellWpr_'+i}>
            {appointments => (
              <TimeCell appointments={getAppointmentsList(date,i,appointments)}></TimeCell>
            )}
        </AppointmentContext.Consumer>      
      ))
    )
  }

  return (
    <div className="day-row-container">
      {getTimeCells()}
    </div>
  );
}

export default DayRow;