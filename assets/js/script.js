// Assignment Code
var generateBtn = document.querySelector("#generate");

//apply global variables for password 
var num = "0123456789";
var big = "ABCDEFGHIJKLMNOPQRSTWXYZ";
var small = "abcdefghijklmnopqrstuvwxyz";
var symbols = "!@#$%^&*_-+=";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  
}
// creating stuff for password upon clicking the button by default it will create lowercase password
var generatePassword = function() {
  // let the user decide how long he want the password to be
  var long = window.prompt("How many characters do you want?");
  var length = long;
  var key = "";
  var specialkey = [];

  //let user decide what kind of characters it wants
  var biginput = window.confirm("Do you want capital characters?");
  var specialinput = window.confirm("Do you want special characters?");
  var smallinput =  window.confirm("Do you want small characters?");
  var numinput = window.confirm("Do you want number characters?")

  //Make sure user atleast have one character type 
  if (biginput === false && specialinput === false && smallinput === false && numinput === false){
    window.alert ("Choose at least one character type!")
  } else {
  if (biginput) {
    specialkey += big;
  };
  if (specialinput) {
    specialkey += symbols;
  };
  if  (smallinput) {
    specialkey += small;
  };

  if (numinput) {
    specialkey += num;
  };

  for ( var i = 0; i < length; i++) {
  key += specialkey.charAt(Math.floor(Math.random() * specialkey.length));
  }
  return key;
}
};

  
  
  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

