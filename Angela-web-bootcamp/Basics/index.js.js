var userInput = prompt("Type your tweet to check the total characters.")
var allowedCharacter = 140
var totalCharacter = userInput.length
var remainingCharacter = 140 - totalCharacter


alert("You have written " + totalCharacter + " characters, you have " + remainingCharacter + " characters left.")
alert(userInput.slice(0,140))


 