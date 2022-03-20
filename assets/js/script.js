//Global variable declarations
var passLength = 0;
var doUpper = "";
var doLower = '';
var doSpecial = '';
var doNumeric = '';


//Set intial usable characters to an empty array
var passChars = [];

//Usable charsets
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



//Function to get password criteria
var getPasswordLength = function(){
  passLength = parseInt(window.prompt("Please enter password length from 8-128 characters"));

  if (passLength >= 8 && passLength <= 128) {
    return passLength;
  }
  else {
    window.alert("Please enter a valid password length!")
    getPasswordLength();
  } 
}


var getCriteria = function() {

//User prompts for charset

doUpper = parseInt(window.prompt("Would you like to include Uppercase characters? Enter 0 for no, 1 for yes"));
doLower = parseInt(window.prompt("Would you like to include lowercase characters? Enter 0 for no, 1 for yes"));
doSpecial = parseInt(window.prompt("Would you like to include special characters? Enter 0 for no, 1 for yes"));
doNumeric = parseInt(window.prompt("Would you like to include numerical characters? Enter 0 for no, 1 for yes"));

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

//Ensure at least one charset has been selected
if (!doUpper && !doLower && !doSpecial && !doNumeric) {
  window.alert("You need to select at least one character set!")
  getCriteria();
}

//Append chosen charsets to usable characters
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

}



//Function to generate password based on criteria 
function generatePassword() {

  //calls for criteria functions
getPasswordLength();
getCriteria();

//generate random password
generatedPassword = "";
  for (var i = 0; i < passLength; i++) {
    var randomChar = Math.floor(Math.random()*passChars.length);
    passwordCharacter = passChars[randomChar];
    generatedPassword += passwordCharacter;
 }
return generatedPassword;
}


//Function to write password to text box
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  //reset usable characters
  passChars = [];

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
