// Assignment Code  
var generateBtn = document.querySelector("#generate");



// declaring password length
var passwordLength;
function definePasswordLength (){
  

passwordLength = prompt("how many characters do you want your password to be?")

 if (passwordLength < 8 || passwordLength > 128 ){
alert('password must be between 8 and 128 characters ')

definePasswordLength();

 }else if (passwordLength >= 8 || passwordLength <= 128){


  confirm("are you sure you want your password to be " +passwordLength +" characters long")


 }else if (confirm === true){
console.log(passwordLength);

 }

 }
definePasswordLength();
//  password length is now defined to what the user wants 




// defining the available characters 

var letterSet =[];

var lowerLetters ;
lowerLetters = ["a","b","c","d","f","e","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
console.log(lowerLetters);


var UpperCaseLetters;
UpperCaseLetters = lowerLetters.map(lowerLetters => lowerLetters.toUpperCase());
console.log(UpperCaseLetters);

var numbers;
numbers = ["1","2","3","4","5","6","7","8","9", "0"]
console.log(numbers);

var specialCharacters;
specialCharacters = ["!","@","#","$","%","&","?",]
console.log(specialCharacters);
// all available characters are defined 




//  empty string for characters to be added is defined 
 var randomCharacters = [];
console.log(randomCharacters);

console.log(passwordLength)





 //  we need

// data - sting numbers booleans

// modify data - reassign new value to variable

// creat new data - 

// gather data from user

// modify existing data

// validate data (booleans)

// keep adding to password untill desired length is obtained 
// += to password and keep looping through 
// wich means i have to make multiple variables to that target each type of character 

// use confirm() true to validate values that user wants

// if variable that is chosen then concat to overall password confirm with the confirm tag

// randomally selct available character from each set of arrays






// confirming and adding character to randomCharacters array
var confirmNumbers;
var confirmLowerLetters;
var confirmUpperLetters;
var confirmSpecialCharacters;




function confirmCharacters (){

  confirmNumbers = confirm(" Do you want numbers in you password?")
  confirmLowerLetters = confirm(" Do you want lower case letters in you password?")
  confirmUpperLetters = confirm(" Do you want upper case letters in you password?")
  confirmSpecialCharacters = confirm(" Do you want special characters in you password?")
  
 if (confirmNumbers === false && confirmLowerLetters === false && confirmUpperLetters === false && confirmSpecialCharacters === false){
alert("you must choose at least one type of character for your password")
 }else if (confirmNumbers === true && confirmLowerLetters === false && confirmUpperLetters === false && confirmSpecialCharacters === false){

  randomCharacters += numbers;
  console.log(randomCharacters)
 }else if (confirmNumbers === true && confirmLowerLetters === true && confirmUpperLetters === false && confirmSpecialCharacters === false){
   randomCharacters+= numbers.concat(lowerLetters);
   console.log(randomCharacters)
  }else if (confirmNumbers === true && confirmLowerLetters === true && confirmUpperLetters === true && confirmSpecialCharacters === false){
    randomCharacters+= numbers.concat(lowerLetters.concat(UpperCaseLetters));
  console.log(randomCharacters)

 }else if (confirmNumbers === true && confirmLowerLetters === true && confirmUpperLetters === true && confirmSpecialCharacters === true){
  randomCharacters+= numbers.concat(lowerLetters.concat(UpperCaseLetters.concat(specialCharacters)));
console.log(randomCharacters)
}else if (confirmNumbers === false && confirmLowerLetters === false && confirmUpperLetters === false && confirmSpecialCharacters === true){

  randomCharacters += specialCharacters;
  console.log()
}else if (confirmNumbers === false && confirmLowerLetters === false && confirmUpperLetters === true && confirmSpecialCharacters === true){

  randomCharacters+= UpperCaseLetters.concat(specialCharacters);


}else if (confirmNumbers === false&& confirmLowerLetters === true && confirmUpperLetters === true && confirmSpecialCharacters === true){
  randomCharacters+= lowerLetters.concat(UpperCaseLetters.concat(specialCharacters));


}else if (confirmNumbers === true && confirmLowerLetters === false && confirmUpperLetters === false && confirmSpecialCharacters === true){
randomCharacters += numbers.concat(specialCharacters)

}else if (confirmNumbers === false && confirmLowerLetters === false && confirmUpperLetters === true && confirmSpecialCharacters === false){
  randomCharacters+= UpperCaseLetters;
}else if (confirmNumbers === false && confirmLowerLetters === true && confirmUpperLetters === true && confirmSpecialCharacters === false){

  randomCharacters+= lowerLetters.concat(UpperCaseLetters)
}else if (confirmNumbers === false && confirmLowerLetters === true && confirmUpperLetters === false && confirmSpecialCharacters === false){
  randomCharacters+= UpperCaseLetters.concat(specialCharacters)
}

}
confirmCharacters();
// end of confirming characters 



// checking randomCharacters + changing array to string 
console.log(randomCharacters);
 randomCharacters = randomCharacters.toString();
console.log( randomCharacters)

// console.log(randomCharacters.length)


// password+= Math.floor(Math.random() * .length);



// generating password with  custom user data
function generatePassword (length){
  var password = "";
 
  for (var i = 0; i< passwordLength;i++){
  password += randomCharacters.charAt(Math.floor(Math.random()* randomCharacters.length))
}
  
  return password;
  }

  
generatePassword(passwordLength);
  console.log(generatePassword(passwordLength))
  

 
// printing the password function is already done

function writePassword() {
 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


