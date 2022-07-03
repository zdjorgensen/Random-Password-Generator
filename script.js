// specialChar, numeric, lowercase, uppercase determines if user want those characters in the generated password
var specialChar = 0;
var numeric = 0;
var lowercase = 0;
var uppercase = 0;
var passwordLength = 0;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", PasswordLength);

// Determines how many characters the password will contain
function PasswordLength(){
  var passwordPrompt = prompt("How many characters would you like your password to contain?");
  if(passwordPrompt < 8 || passwordPrompt > 128 ) {
    alert("Password length must be at least 8 characters and no more than 128 characters.");
    return;
  } else {
    passwordLength = passwordPrompt;
    addCharacters();
  } 
}

// Results will either be 0 or 1 depending on if they want those characters in the password.
function addCharacters(){ 
  var specialCharacterPrompt = prompt("Click OK to include special characters in your password.")
    if(specialCharacterPrompt != null) specialChar = 1;

  var numericPrompt = prompt("Click OK to include numeric characters in your password.");
    if(numericPrompt != null) numeric = 1;

  var lowercasePrompt = prompt("Click OK to include lowercase characters in your password.");
    if(lowercasePrompt != null) lowercase = 1;

  var uppercasePrompt = prompt("Click OK to include uppercase characters in your password.");
    if(uppercasePrompt != null) uppercase = 1;

  if(specialChar == 0 && numeric == 0 && lowercase == 0 && uppercase == 0){
    alert("Must choose at least one option")
    return;
  }
  writePassword();
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  // Resets choices for another password
  specialChar = 0;
  numeric = 0;
  lowercase = 0;
  uppercase = 0;
}

// Generates the password depending on the user's choices 
function generatePassword() {
  var generatedPassword = "";
  var possibleCharacters = "";

  if(specialChar == 1) {
    var specialCharList = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    possibleCharacters = possibleCharacters.concat(specialCharList);
  }
  if(numeric == 1){
    var numericList = "1234567890";
    possibleCharacters = possibleCharacters.concat(numericList);
  }
  if(lowercase == 1){
    var lowercaseList = "abcdefghijklmnopqrstuvwxyz";
    possibleCharacters = possibleCharacters.concat(lowercaseList);
  }
  if(uppercase == 1){
    var uppercaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    possibleCharacters = possibleCharacters.concat(uppercaseList);
  }

  for (var i=0; i<passwordLength; i++){ //Source for the for loop: https://www.codegrepper.com/code-examples/javascript/select+random+character+from+string+javascript
    generatedPassword += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
  }
  
  return generatedPassword;
}