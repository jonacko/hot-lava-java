/** Pseudo code
 * Alert to tell user to click but to generate a password
 * When red button is clicked, user is prompted to specify whether they would like upper case, lower case & special characters in their password
 * User is prompted to specify a length for their password between 8-128 char
 * Loop until user chooses a character length between 8-128 char
 * Password is generated based on the above
 */

// Assignment code here

const resultEL = document.getElementById('result');
const lengthEL = document.getElementById('length');
const uppercaseEL = document.getElementById('uppercase');
const lowercaseEL = document.getElementById('lowercase');
const numberEL = document.getElementById('number');
const symbolEL = document.getElementById('symbol');
const generateEL = document.getElementById('generate');
const clipboardEL = document.getElementById('clipboard');

const randomFunc = {
lower: getLowercase,
upper: getUppercase,
number: getNumber,
symbol: getSpecialChar

};

generateEL.addEventListener('click', () => {
const length = lengthEl.vale;

console.log(length);

})

//Generator functions - these worked in the console

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

//

console.log(getSpecialChar());

//  When the user first visits the page

alert("Click the red button to generate a password.");

// This makes the button reactive

var generatePassword = function () {

//Prompt for length

function promptForLength() {
  let userResponse = prompt("How long would you like your password to be? (No more than 128 characters)");
  let numberResponse = Number(userResponse);
  while (isNaN(numberResponse) || numberResponse > 128 || numberResponse < 8) {
      if (isNaN(numberResponse)) {
        userResponse = prompt("That's not a number. Please enter a number.");
      }
      else if(numberResponse > 128) {
        userResponse = prompt("That's too many characters.");
      }
      else if (numberResponse < 8) {
        userResponse = prompt("That's not enough characters.");
      }

    }
    numberResponse = Number(userResponse);
  }

{
document.getElementById("generate").value=promptForLength;
}


}



// Get references to the #generate element - this comment and code was provided for us
var generateBtn = document.querySelector("#generate");

// Write password to the #password input - this comment and code was provided for us
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  //this asks the user to set the parameters of their password

  confirm("Would you like your password to contain lower case letters?  Press 'ok' if so, 'cancel' if not.");

  confirm("Would you like your password to contain upper case letters?  Press 'ok' if so, 'cancel' if not.");

  confirm("Would you like your password to contain special characters?  Press 'ok' if so, 'cancel' if not.");

  //this prompts users to type a length for the password.  OR operatory > 128 to add


  let length = prompt("How long would you like your password to be?  Please choose a value of at least 8 characters and less than 128 characters.");

  if (length < 8) {
    alert("Please choose a value that is at least 8 characters and no more than 128 characters.");
  } else { 
     alert("nice one");
  }


  /** 
let name = "Angela";
alert(name);
*/

}

// Add event listener to generate button - this comment and code was provided for us

generateBtn.addEventListener("click", writePassword);
