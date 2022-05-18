// STRING CONCATINATION

let firstName = "TECHNICAL";
let lastName = "SHAMPY";

let address = "113h Feroz Park";
let phone = 923124874118;

console.log(firstName);
console.log(firstName + lastName);
console.log(firstName, lastName, address, phone);

document.write(`${phone}` + `${address}` + " ");

console.log(
  "My Name is " + `${firstName}`,
  "and last name is : " + `${lastName}`,
);

let info = firstName + " " + lastName;
document.write(info);

const website = "joblyjobs";
const url = "https://www." + website + ".org";

console.log(url);

// CHALLENGE
const street = "Main Street";
const country = "USA";

const fullMailingAddress = street + " " + country;
console.log(fullMailingAddress);

// NUMBERS
let number = 34;
let pi = 3.147;

console.log(typeof number + typeof pi);

number += 6;
console.log(number);

const slices = 10;
const child = 4;
const amount = slices % child;

console.log(amount);

const random = 4 + 2 + 7 * 9;
const random2 = (4 + 2 + 7) * 9;

console.log(random);
console.log(random2);

// CHALLENGES
const score1 = 74;
const score2 = 32;
const score3 = 48;

const total = score1 + score2 + score3;
const average = total / 3;

console.log(total);
console.log(average);

let plates = 20;
let people = 7;
let remainingPlates = plates % people;
remainingPlates++;

const message = `There are ${remainingPlates} Plates Available`;
console.log(remainingPlates);

console.log(message);

// IMPLICIT TYPE CONVERSION
const value = firstName - lastName;
console.log(value);

let number1 = "10";
let number2 = "27";

let sub = number1 - number2;
console.log(sub);
let sub1 = number1 + number2;
console.log(sub1);

// FUNCTION
const randomNumber = 13;
document.querySelector(".form").addEventListener("submit", function (e) {
  e.preventDefault();
  let value = document.getElementById("amount").value;
  value = parseInt(value);
  console.log("Input Value Type");
  console.log(value);
  console.log("Sum Of Two Values");
  console.log(randomNumber + value);
});
