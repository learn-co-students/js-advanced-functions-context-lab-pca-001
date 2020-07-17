

function createEmployeeRecord(array) {
  const [firstName, familyName, title, payPerHour] = array
  // deconstructing
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
    const updateRecord = {
      type: "TimeIn",
      hour: parseInt(time[1]),
      date: time[0]
    }
    this.timeInEvents.push(updateRecord)
    return this
  }

  function createTimeOutEvent(dateStamp) {
    const time = dateStamp.split(" ")
    const updateRecord = {
      type: "TimeOut",
      hour: parseInt(time[1]),
      date: time[0]
    }
    this.timeOutEvents.push(updateRecord)
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
    return this.timeInEvents.reduce((total, event) => total + wagesEarnedOnDate.call(this, event.date), 0)
  }

  function calculatePayroll(employees) {
    return employees.reduce((total, employee) => total + allWagesFor.call(employee), 0)
  }

  function findEmployeeByFirstName(srcArray, name) {
    return srcArray.find(employee => employee.firstName === name)
  }
