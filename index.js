/* Your Code Here */

function createEmployeeRecord(employeeArray) {
  let employee = {}

  employee.firstName = employeeArray[0]
  employee.familyName = employeeArray[1]
  employee.title = employeeArray[2]
  employee.payPerHour = employeeArray[3]
  employee.timeInEvents = []
  employee.timeOutEvents = []

  return employee
}

function createEmployeeRecords(employees) {
  return employees.map(employee => createEmployeeRecord(employee))
}

function createTimeInEvent(timeIn) {
  let timeInEvent = {}
  const time = timeIn.split(" ")

  timeInEvent.type = "TimeIn"
  timeInEvent.date = time[0]
  timeInEvent.hour = parseInt(time[1])
  this.timeInEvents.push(timeInEvent)

  return this
}

function createTimeOutEvent(timeOut) {
  let timeOutEvent = {}
  const time = timeOut.split(" ")

  timeOutEvent.type = "TimeOut"
  timeOutEvent.date = time[0]
  timeOutEvent.hour = parseInt(time[1])
  this.timeOutEvents.push(timeOutEvent)

  return this
}

function hoursWorkedOnDate(date) {
  const timeIn = this.timeInEvents.find(event => {
    return event.date === date
  }).hour

  const timeOut = this.timeOutEvents.find(event => {
    return event.date === date
  }).hour

  return (timeOut - timeIn) / 100
}

function wagesEarnedOnDate(date) {
  const hours = hoursWorkedOnDate.call(this, date)
  const pay = this.payPerHour

  return hours * pay
}

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

function calculatePayroll(employees) {
    const wagesArr = employees.map(employee => {
      return allWagesFor.call(employee)
    })

    return wagesArr.reduce((wage, total) => wage + total)
}

function findEmployeeByFirstName(employeeRecords, firstName) {
    return employeeRecords.find(employee => employee.firstName == firstName)
}