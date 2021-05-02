const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const today = new Date()
const dayToday = today.getDay();

function getInitialWeek() {
  return getWeekByIndex(0);
}

function getWeekByIndex(index) {
  return days.map((day, i)=> {
    const dateThatDay = new Date(today);
    dateThatDay.setDate(dateThatDay.getDate() - dayToday + i + (index*7));
    return {
      dateInString: getStringDate(dateThatDay),
      date: dateThatDay,
      day
    }
  })
}

function getStringDate(date) {
  return date.getFullYear() + ("0" + (date.getMonth() + 1)).slice(-2) + ("0" + date.getDate()).slice(-2);
}

module.exports = {
  getInitialWeek: getInitialWeek,
  getWeekByIndex: getWeekByIndex,
  getStringDate: getStringDate
}