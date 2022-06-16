
//Note: There is a bug! I am turning in what I have. The current bug is as follows: The user selects the character sets they want in a password and I have it set up to add those character arrays into an array variable. I then have a for loop that gets the combined/selected character array (userSelected) and chooses a random selection from the array that is the requested password length. HOWEVER, the possibility of not getting a certain selected character exists. I have tried other methods and solutions, but have yet to resolve the issue. I am planning on solving and resubmitting in the future. Thanks

// Assignment code here


//Uppercase
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];

//Lowercase
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Numbers
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//Special Characters
var spCharacters = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];


//generate password function
function generatePassword() {

  //password variable and user character selection variable
  var pwd = "";
  var userSelection = []


  //prompt for password length
  var passwordLength = parseInt(prompt("How long do you want your password to be? (must be between 8 - 128 characters)"))
  console.log(passwordLength)
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Password must be between 8 - 128 characters");
    generatePassword(); //recursive function call
    // return; (returns undefined)
  }


  // Prompts for character types
  var upperCaseChoice = confirm("Would you like your password to contain uppercase characters?");

  var lowerCaseChoice = confirm("Would you like your password to contain lowercase characters?");

  var numChoice = confirm("Would you like your password to contain numbers?");

  var spChoice = confirm("Would you like your password to contain special characters?");


  //conditional for no character selections being chosen
  if (!upperCaseChoice && !lowerCaseChoice && !numChoice && !spChoice) {
    alert("You must select at least one option")
    generatePassword();
    // return;
  }

  //conditionals for user's character selection
  //if true, the selected character array gets added to the userSelectionArray
  if (lowerCaseChoice) {
    userSelection = userSelection.concat(lowerCase)
  }
  if (upperCaseChoice) {
    userSelection = userSelection.concat(upperCase)
  }
  if (numChoice) {
    userSelection = userSelection.concat(numbers)
  }
  if (spChoice) {
    userSelection = userSelection.concat(spCharacters)
  }


  //for loop that uses the password length chosen and the character selections chosen
  for(i = 0; i < passwordLength; i++) {
    pwd += userSelection[Math.floor(Math.random() * userSelection.length)]
  }
  // console.log(pwd)

  // this returns the result of the generatePassword function 
  return pwd;
  
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
