// Assignment code here

//Create List of Characters

//Prompt for chritera
//Get pass length
//Get char type (Upper, Lower, Special, Numbers)
//validate input
var passLength = 0;
var doUpper = "";
var doLower = '';
var doSpecial = '';
var doNumeric = '';

//Generate password
//choose random characters

var passChars = [];

var lowerChars = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
];

var upperChars = [
  'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
]

var specialChars = [
  '!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[',']','^','_','`','{','}','|','}','~'
]

var numChars = [
  '0','1','2','3','4','5','6','7','8','9'
]
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
var getCriteria = function() {

//User prompts for charset and pass length
passLength = parseInt(window.prompt("Please enter password length from 8-128 characters"));
doUpper = window.prompt("Would you like to include Uppercase characters? Enter 0 for no, 1 for yes");
doLower = window.prompt("Would you like to include lowercase characters? Enter 0 for no, 1 for yes");
doSpecial = window.prompt("Would you like to include special characters? Enter 0 for no, 1 for yes");
doNumeric = window.prompt("Would you like to include numerical characters? Enter 0 for no, 1 for yes")


doUpper = parseInt(doUpper);
doLower = parseInt(doLower);
doSpecial = parseInt(doSpecial);
doNumeric = parseInt(doNumeric);

//determine charset
 switch (doUpper) {
  case 0:
    doUpper = false;
    break;
  case 1:
      doUpper = true;
      break;
  default: 
      window.alert ("Invalid input, try again!")
      getCriteria();   
 }

 switch (doLower) {
   case 0:
     doLower = false;
     break;
  case 1: 
    doLower = true;
    break;
  default: 
    window.alert ("Invalid input, try again!")
    getCriteria(); 
 }

 switch(doSpecial) {
   case 0:
     doSpecial = false;
     break;
  case 1:
    doSpecial = true;
    break;
  default: 
    window.alert ("Invalid input, try again!")
    getCriteria(); 
 }

 switch (doNumeric) {
   case 0:
     doNumeric = false;
     break;
  case 1: 
    doNumeric = true;
    break;
  default: 
    window.alert ("Invalid input, try again!")
    getCriteria();    
 }

if (!doUpper && !doLower && !doSpecial && !doNumeric) {
  window.alert("You need to select at least one character set!")
  getCriteria();
}




if (doUpper) {
  passChars.push.apply(passChars, upperChars);
}

if (doLower) {
  passChars.push.apply(passChars, lowerChars);
}

if (doSpecial) {
  passChars.push.apply(passChars, specialChars);
}

if (doNumeric) {
  passChars.push.apply(passChars, numChars);
}

console.log(passChars);
}

function generatePassword() {
getCriteria();

generatedPassword = "";
  for (var i = 0; i < passLength; i++) {
    var randomChar = Math.floor(Math.random()*passChars.length);
    passwordCharacter = passChars[randomChar];
    generatedPassword += passwordCharacter;
 }
return generatedPassword;
}



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  passChars = [];

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
