// ARRAY, FUNCTION, OBJECTS
// ARRAYS - [], 0 index based

let friend1 = "shampy";
let friend2 = "moeez";
let friend3 = "empty";

let firends = ["shampy", "moeez"];
let firends_ = [friend1, friend2, friend3];

console.log(firends);
console.log(firends_);

console.log(firends_[1]);

let bestie = firends_[1];
firends_[2] = "";
console.log(bestie);

console.log(firends_[2]);

firends_ += [firends];
console.log(firends_);

// CHALLENGE
let fruits = ["Apple", "Bannana", "Mango", 34];
let firstFruit = fruits[0];
console.log(fruits);
fruits[3] = "date";
console.log(fruits);

console.table(firends);
