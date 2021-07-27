console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
console.log("EXERCISE 1:\n==========\n");

// YOUR CODE HERE
let a = 20;
let b = 4;
let add = a + b;
let minus = a - b;
let multiply = a * b;
let dividing = a / b;

console.log(a);
console.log(b);
console.log(add);
console.log(minus);
console.log(multiply);
console.log(dividing);

// Exercise 2
console.log("EXERCISE 2:\n==========\n");

// YOUR CODE HERE
let c = 11;
let str = "11";
let str2 = "eleven";
let isPresent = true;
let firstName = "Jackie";
let lastName = "Chan";

console.log(c + str); //1111
console.log(c + str2); //11eleven
console.log(c + isPresent); //12
console.log(c + firstName); //11Jackie
console.log(c + lastName); //11Chan

// Exercise 3
console.log("EXERCISE 3:\n==========\n");

// YOUR CODE HERE
let d = 5;
let str3 = "5";
let str4 = "five";
let isPresent2 = false;
let firstName2 = "Robin";
let lastName2 = "Williams";

console.log(d == str3); //true
console.log(d === str4); //false
console.log(!isPresent2); //true
console.log("eleven" === str3 && d >= str4); //false
console.log(!isPresent2 /*true*/ || isPresent2 /*false*/); //true
console.log(0 == false); //true
console.log(0 === false); //false
console.log(0 != false); //false
console.log(0 !== false); //true
