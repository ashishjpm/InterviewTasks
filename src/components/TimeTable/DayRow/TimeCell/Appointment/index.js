import React from 'react';
import './appointment.css';

function Appointment(props) {
  var cellHeight = 100;
  var startHour = Math.floor(props.data.from/100);
  var startMin = props.data.from - startHour*100;
  var endHour = Math.floor(props.data.to/100);
  var endMin = props.data.to - endHour*100;

  var top = startMin * (cellHeight/60);
  var height = ((endHour - startHour - 1) * cellHeight) + ((60 - startMin + endMin) * cellHeight/60) ;

  var appointmentContainerStyle = {height, top}
  return (
    <div className="appointment-container" style={appointmentContainerStyle}>
      {props.data.title}
    </div>
  );
}

export default Appointment;