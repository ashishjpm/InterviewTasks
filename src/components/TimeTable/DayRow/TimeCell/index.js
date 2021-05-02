import React from 'react';
import './timeCell.css';
import Appointment from './Appointment';

function TimeCell(props) {

  function getAppointmentsJsx() {
    return (props.appointments && props.appointments.length) 
      ? (
        props.appointments.map((appointment,i) => {
          return <Appointment key={'AppointmentWpr_'+i} data={appointment}></Appointment>
        })
      )
      : null
  }

  return (
    <div className="time-cell-container">
      {getAppointmentsJsx()}
    </div>
  );
}

export default TimeCell;