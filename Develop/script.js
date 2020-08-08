// Assignment Code
var generateBtn = document.querySelector("#generate");




// Write password to the #password input

function writePassword() {

  var passwordLength = prompt("Choose a password length. Enter a number between 8 - 128.");
  if(passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid number.");
    prompt("Choose a password length. Enter a number between 8 - 128.");
    return;
  } else {
    alert("Your password will consist of " + passwordLength + " characters.");
  }

  var lowercaseChar = confirm("Do you want to include lowercase characters in your password?");
  if(lowercaseChar) {
    alert("Your password will include lowercase letters.");
  } else {
    alert("Your password will NOT inlcude lowercase letters.");
  }

  var uppercaseChar = confirm("Do you want to include uppercase characters in your password?");
  if(uppercaseChar) {
    alert("Your password will include uppercase letters.");
  } else {
    alert("Your password will NOT inlcude uppercase letters.");
  }

  var numericChar = confirm("Do you want to include numeric characters in your password?");
  if(numericChar) {
    alert("Your password will include numeric characters.");
  } else {
    alert("Your password will NOT inlcude numeric characters.");
  }

  var specialChar = confirm("Do you want to include special characters in your password?");
  if(specialChar) {
    alert("Your password will include special characters.");
  } else {
    alert("Your password will NOT inlcude special characters.");
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;  


}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
