/* Your Code Here */

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

function createEmployeeRecord(employeeInfo) {
  let [firstName, familyName, title, payPerHour] = employeeInfo
  return {
    firstName,
    familyName,
    title,
    payPerHour,
    timeInEvents: [],
    timeOutEvents: []
  }
}

function createEmployeeRecords(employees) {
  return employees.map(employee => createEmployeeRecord(employee))
}

function createTimeInEvent(timeStamp) {
  this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(timeStamp.split(" ")[1]),
    date: timeStamp.split(" ")[0]
  })
  return this
}

function createTimeOutEvent(timeStamp) {
  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(timeStamp.split(" ")[1]),
    date: timeStamp.split(" ")[0]
  })
  return this
}

function hoursWorkedOnDate(date) {
  const timeIn = this.timeInEvents.find(e => e.date === date).hour
  const timeOut = this.timeOutEvents.find(e => e.date === date).hour
  return (timeOut - timeIn)/100
}

function wagesEarnedOnDate(date) {
  return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

function allWagesFor() {
  return this.timeInEvents.reduce((total, event) => total + wagesEarnedOnDate.call(this, event.date), 0)
}

function calculatePayroll(employees) {
  return employees.reduce((total, employee) => total + allWagesFor.call(employee), 0)
}

function findEmployeeByFirstName(srcArray, name) {
  return srcArray.find(emp => emp.firstName === name)
}
