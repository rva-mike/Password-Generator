// Assignment code here


//Uppercase
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];

//Lowercase
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Numbers
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//Special Characters
var spCharacters = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];


function generatePassword() {

  var passwordLength = parseInt(prompt("How long do you want your password (must be between 8-125)"))
  console.log(passwordLength)
  if (passwordLength < 8 || passwordLength > 125 || isNaN(passwordLength)) {
    alert("Password must be between 8 - 125 characters");
    generatePassword(); //recursive function call
    // return; (returns undefined)
  }

    // Prompts for character types

    var upperCaseChoice = confirm("Would you like your password to contain uppercase characters?");

    var lowerCaseChoice = confirm("Would you like your password to contain lowercase characters?");
  
    var numChoice = confirm("Would you like your password to contain numbers?");
  
    var spChoice = confirm("Would you like your password to contain special characters?");




}











// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
