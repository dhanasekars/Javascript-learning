function lifeInWeeks(age) {
    console.log("your age is " + age)
    var yearsRemaining = 90 - age
    var daysRemaining = yearsRemaining * 365 
    var weeksRemaining = yearsRemaining * 52
    var monthsRemaining = yearsRemaining * 12

    console.log("You have " + daysRemaining + " days, " + weeksRemaining + " weeks, and " + monthsRemaining + " months left.")

}


lifeInWeeks(23)