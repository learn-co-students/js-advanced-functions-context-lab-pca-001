// let allWagesFor = function () {
//     let eligibleDates = this.timeInEvents.map(function (e) {
//         return e.date
//     })

//     let payable = eligibleDates.reduce(function (memo, d) {
//         return memo + wagesEarnedOnDate.call(this, d)
//     }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

//     return payable
// }


function createEmployeeRecord(array) {
  const [firstName, familyName, title, payPerHour] = array
  return {
    firstName,
    familyName,
    title,
    payPerHour,
    "timeInEvents": [],
    "timeOutEvents": []
  }
}

function createEmployeeRecords(employees) {
    return employees.map(employee => createEmployeeRecord(employee))
}

function createTimeInEvent(dateStamp) {
  const time = dateStamp.split(" ")
  // A date stamp ("YYYY-MM-DD HHMM")
  const updateEmployeeRec = {
    type: "TimeIn",
    hour: parseInt(time[1]),
    date: time[0]
  }
  this.timeInEvents.push(updateEmployeeRec)
  return this
}

function createTimeOutEvent(dateStamp) {
  const time = dateStamp.split(" ")
  // A date stamp ("YYYY-MM-DD HHMM")
  const updateEmployeeRec = {
    type: "TimeOut",
    hour: parseInt(time[1]),
    date: time[0]
  }
  this.timeOutEvents.push(updateEmployeeRec)
  return this
}

function hoursWorkedOnDate(date) {
  const timeIn = this.timeInEvents.find((event) => event.date === date)
  const timeOut = this.timeOutEvents.find((event) => event.date === date)

  if( timeIn && timeOut ) {
    return (timeOut.hour - timeIn.hour) / 100
  }
}

function wagesEarnedOnDate(date) {
  return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

function allWagesFor() {
  return this.timeInEvents.reduce((total, dateStamp) => total + wagesEarnedOnDate.call(this, dateStamp.date), 0)
}

function calculatePayroll(employees) {
    // return Sum of pay owed to all employees for all dates, as a number
  return employees.reduce((total, employee) => total + allWagesFor.call(employee), 0)
}

function findEmployeeByFirstName(freshArray, firstName) {
  return freshArray.find(employee => employee.firstName === firstName)
}