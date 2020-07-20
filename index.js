let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(employeeArray) {
    let [firstName, familyName, title, payPerHour] = employeeArray
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

function createTimeInEvent(datestamp) {
this.timeInEvents.push({
    "type": "TimeIn",
    "hour": parseInt(datestamp.split(" ")[1]), //parsInt convert string to integer
    "date": datestamp.split(" ")[0]
})
return this
}

function createTimeOutEvent(datestamp) {
this.timeOutEvents.push({
    "type": "TimeOut",
    "hour": parseInt(datestamp.split(" ")[1]), //parsInt convert string to integer
    "date": datestamp.split(" ")[0]
})
return this
}

function hoursWorkedOnDate(date) {
let start = this.timeInEvents.find( punchin => punchin.date === date)
let end = this.timeOutEvents.find( punchout => punchout.date === date)
return (end.hour - start.hour) / 100
}

function wagesEarnedOnDate(date) {
return this.payPerHour * hoursWorkedOnDate.call(this, date)
}

function allWagesFor() {
return this.timeInEvents.reduce((total, datestamp) => total + wagesEarnedOnDate.call(this, datestamp.date), 0)
}

function findEmployeeByFirstName(employeesArray, firstname) {
return employeesArray.find(employee => employee.firstName === firstname)
}

function calculatePayroll(employeesArray) {
return employeesArray.reduce((total, employee) => total + allWagesFor.call(employee), 0)
}