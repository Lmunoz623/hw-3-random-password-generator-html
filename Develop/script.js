// Assignment Code
var generateBtn = document.querySelector("#generate");




// Write password to the #password input


function writePassword() {
  
  // Array of possible characters for each character type
  
  var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var number = [0,1,2,3,4,5,6,7,8,9];
  var symbol = ["!","@","#","$","%","^","&","*","(",")","+","?","<",">","|","~","{","}","=","+"];

  var charTypeSelected = [];
  var password = [];

  // A series of prompts user completes in order to select password criteria 
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
    charTypeSelected = charTypeSelected.concat(lower);
  } else {
    alert("Your password will NOT inlcude lowercase letters.");
  }

  var uppercaseChar = confirm("Do you want to include uppercase characters in your password?");
  if(uppercaseChar) {
    alert("Your password will include uppercase letters.");
    charTypeSelected = charTypeSelected.concat(upper);
  } else {
    alert("Your password will NOT inlcude uppercase letters.");
  }

  var numericChar = confirm("Do you want to include numeric characters in your password?");
  if(numericChar) {
    alert("Your password will include numeric characters.");
    charTypeSelected = charTypeSelected.concat(number);
  } else {
    alert("Your password will NOT inlcude numeric characters.");
  }

  var specialChar = confirm("Do you want to include special characters in your password?");
  if(specialChar) {
    alert("Your password will include special characters.");
    charTypeSelected = charTypeSelected.concat(symbol);
  } else {
    alert("Your password will NOT inlcude special characters.");
  }

  // If no character types were selected, the user will be asked to select at least one character type and the function will return. The user must then click the button again and start over.
  if (!lowercaseChar && !uppercaseChar && !numericChar && !specialChar) {
    alert("Please select at least one character type.")  
    return;
  }

  // This for loop creates the random password to be generated to the password box
  for (var i = 0; i < passwordLength; i++) {
    password[i] = charTypeSelected[Math.floor(Math.random() * charTypeSelected.length)];
    
  }

  var passwordText = document.querySelector("#password");
  passwordText.value = password.join("");  


}

function generatePassword() {

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




