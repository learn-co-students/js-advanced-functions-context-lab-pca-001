/* Your Code Here */
const createEmployeeRecord = (arr) => {
    return {
      firstName: arr[0],
      familyName: arr[1],
      title: arr[2],
      payPerHour: arr[3],
      timeInEvents: [],
      timeOutEvents: [],
    }
  };

  const createEmployeeRecords = (arr2d) => arr2d.map( e => createEmployeeRecord(e) );

  const timeEvent = (type, time) => {
    const [date, hour] = time.split(" ");
    return {
      type,
      date,
      hour: parseInt(hour),
    }
  }

  function createTimeInEvent(time){
    this.timeInEvents.push(timeEvent("TimeIn", time));
    return this;
  }

  function createTimeOutEvent(time){
    this.timeOutEvents.push(timeEvent("TimeOut", time));
    return this;
  }

  const findDate = (arr, date) => arr.find( el => el.date === date );

  function hoursWorkedOnDate(date){
    const out = findDate(this.timeOutEvents, date);
    const ins = findDate(this.timeInEvents, date);
    return (out.hour - ins.hour) / 100;
  }

  const calculateWage = (e) => e.payPerHour * (e.createTimeOutEvent[0].hour - e.timeInEvents[0].hour);

  function wagesEarnedOnDate(date){
      return hoursWorkedOnDate.call(this, date) * this.payPerHour;
  }

  function calculatePayroll(records){
    return records.reduce( (sum, curr) => sum + allWagesFor.call(curr), 0);
  }

  const findEmployeeByFirstName = (arr, name) => arr.find( e => e.firstName === name  )

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}