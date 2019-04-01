// Data types & variables
var myName = "Euan";
var myAge = 23;
let mySurname = "Gilmour";
const DATABASE_NAME = "imdb";
console.log(myName + " " + mySurname);
// Conditionals
var pinNumber = 1234;
if(pinNumber === 1234) {
  console.log("Correct pin number");
} else {
  console.log("Incorrect!");
}
// Loops
var animals = ['cat', 'donkey', 'goose'];
for (var i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}
// Functions
var printName = function(){
  console.log("Euan");
}
printName();
printName();
printName();
printName();
// Arrays
var pubNames = ['Cloisters', '4042', 'The Red Lion'];
console.log(pubNames);
//  Objects
var person = {
  name: "Euan",
  pinNumber: 1234,
  tel: 01234567890
}
console.log(person);
