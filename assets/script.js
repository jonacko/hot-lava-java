/** PSEUDO CODE
 *  * When red button is clicked, user is prompted to specify a length for their password between 8-128 char.
 * user is prompted to specify whether they would like upper case, lower case & special characters in their password.
 * Loop until user chooses a character length between 8-128 char.
 * Password is generated in the 'your secure password' box based on the above outcomes.
 */


// ASSIGNMENT CODE HERE


// Generator functions - these work but were written before I added the getLowerCase, getUpperCase etc. methods.
// I tried to comment them out as I thought they were no longer necessary but the page breaks when I do, so I've left them in.

function getLowercase ()  {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97); 

}

function getUppercase ()  {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65); 

}

function getNumber ()  {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48); 

}

function getSpecialChar ()  {
  const symbols = '!"#$%&';
  return symbols [Math.floor(Math.random() * symbols.length)];

}


// Makes the button reactive

var generatePassword = function () {


// Prompts for length and returns alerts based on user input.  This works as intended.

let length = prompt("How long would you like your password to be?  Please choose a value of at least 8 characters and less than 128 characters.");
let numberResponse = Number(length);
console.log (numberResponse)
if (length < 8 || length > 128  || isNaN(numberResponse))  {
  alert("Please choose a value that is at least 8 characters and no more than 128 characters.");
  return;
} else { 
   alert("Thank you.  Please proceed to generate password.");
}

  // Asks the user to set the parameters of their password.  This works as intended.

  var lowerCaseChoice = confirm("Would you like your password to contain lower case letters?  Press 'ok' if so, 'cancel' if not.");

  var upperCaseChoice =confirm("Would you like your password to contain upper case letters?  Press 'ok' if so, 'cancel' if not.");

  var specialCharChoice =confirm("Would you like your password to contain special characters?  Press 'ok' if so, 'cancel' if not.");

  var numberChoice =confirm("Would you like your password to contain numbers?  Press 'ok' if so, 'cancel' if not.");

  console.log(lowerCaseChoice, upperCaseChoice, specialCharChoice, numberChoice);
  if (lowerCaseChoice === true) {

    console.log(getLowercase())
  }

  if (upperCaseChoice === true) {

    console.log(getUppercase())
  }

  if (specialCharChoice === true) {

    console.log(getSpecialChar())
  }

  if (numberChoice === true) {

    console.log(getNumber())
  }

// Returns a string of numbers on the console, but not the string I want.
// TO DO: I want it to return the outcome of all the above 'get' methods, only if they are true.  Currently unsure how to write this code.
// TO DO: I then want it to return a ransomised string of the above 'get' outcomes, the number in the string being equal to the value of 'length'.  Currently unsure how to write this code.

  const typesCount = lowerCaseChoice + upperCaseChoice + numberChoice + specialCharChoice;

  if(typesCount === false) {
    return '';
  }

/* I am aware that this for loop makes absolutely no sense but I have left it like this because it is at least printing something to the console and not returning an error.  
I want the 'length' to mean the number of characters specified by the user but that is not the case at the moment.
I can then try and work on it again later when I have a better understanding of what I need to do. */

  var passwordString = [];
  for (let i = lowerCaseChoice + upperCaseChoice + numberChoice + specialCharChoice; i < length; i+= typesCount) {
    passwordString.push(i);
  }
console.log(passwordString);
}


//The below comments and code were provided for us.  
// TO DO: Take the string printed in the console (once it works) and print in the text area.  Currently unsure how to make this work.



// Get references to the #generate element - this comment and code was provided for us
var generateBtn = document.querySelector("#generate");

// Write password to the #password input - this comment and code was provided for us
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button - this comment and code was provided for us

generateBtn.addEventListener("click", writePassword);
