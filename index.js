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

function createEmployeeRecord(arr) {
    let [firstName, familyName, title, payPerHour] = arr
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
    return employees.map(createEmployeeRecord)
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
let begin = this.timeInEvents.find( clockin => clockin.date === date)
let end = this.timeOutEvents.find( clockout => clockout.date === date)
return (end.hour - begin.hour) / 100
}

function wagesEarnedOnDate(date) {
return this.payPerHour * hoursWorkedOnDate.call(this, date)
}

function allWagesFor() {
return this.timeInEvents.reduce((total, datestamp) => total + wagesEarnedOnDate.call(this, datestamp.date), 0)
}

function findEmployeeByFirstName(Arry, firstname) {
return Arry.find(employee => employee.firstName === firstname)
}

function calculatePayroll(Arry) {
return Arry.reduce((total, employee) => total + allWagesFor.call(employee), 0)
}
