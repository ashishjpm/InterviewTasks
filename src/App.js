import './App.css';
import React, { useEffect, useState } from 'react';
import { getInitialWeek, getWeekByIndex } from './util'
import WeekNevigation from './components/WeekNevigation';
import DayScale from './components/DayScale';
import TimeTable from './components/TimeTable';

const AppointmentContext = React.createContext();
const WeekDataContext = React.createContext();

function App() {

  const [AppointmentsValue, setAppointments] = useState([])
  const [WeekDataValue, setWeekData] = useState([])

  useEffect(() => {
    // let db;
    // let dbReq = indexedDB.open('last9', 1);
    // dbReq.onupgradeneeded = function(event) {
    //   db = event.target.result;
    //   let notes = db.createObjectStore('appointments', {autoIncrement: true});
    // }
    // dbReq.onsuccess = function(event) {
    //   db = event.target.result;
    //   fetch('https://608d25499f42b20017c3e84c.mockapi.io/appointment')
    //     .then(results => results.json())
    //     .then(data => {
    //       let tx = db.transaction(['appointments'], 'readwrite');
    //       let store = tx.objectStore('appointments');
    //       let appointments = data[0];
    //       store.add(appointments);
    //       tx.oncomplete = function() { console.log('stored note!') }
    //       tx.onerror = function(event) {
    //         alert('error storing note ' + event.target.errorCode);
    //       }
    //     });
    // }
    // dbReq.onerror = function(event) {
    //   alert('error opening database ' + event.target.errorCode);
    // }
    // return () => {
    //   db.deleteObjectStore('appointments')
    //   openRequest.close();
    // }
    fetch('https://608d25499f42b20017c3e84c.mockapi.io/appointment')
      .then(results => results.json())
      .then(data => {
        setAppointments(data[0]);
      });

      setWeekData(getInitialWeek());
    
  }, []);

  function updateWeekIndex(newIndex) {
    setWeekData(getWeekByIndex(newIndex));
  }

  return (
    <div className="App">
      <WeekNevigation updateWeekIndex={updateWeekIndex}></WeekNevigation>
      <WeekDataContext.Provider value={WeekDataValue}>
        <DayScale></DayScale>
        <AppointmentContext.Provider value={AppointmentsValue}>
          <TimeTable></TimeTable>
        </AppointmentContext.Provider>
      </WeekDataContext.Provider>
    </div>
  );
}

export default App;
export {AppointmentContext, WeekDataContext};
