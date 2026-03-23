// JavaScript Operators - Detailed Notes with Examples

// 1) Arithmetic operators
// +  addition
// -  subtraction
// *  multiplication
// /  division
// %  modulus (remainder)
// ** exponentiation (power)

const a = 5;
const b = 2;

console.log("Arithmetic:");
console.log("a + b =", a + b);   // 7
console.log("a - b =", a - b);   // 3
console.log("a * b =", a * b);   // 10
console.log("a / b =", a / b);   // 2.5
console.log("a % b =", a % b);   // 1
console.log("a ** b =", a ** b); // 25

// 2) Assignment operators
// =   simple assignment
// +=  add and assign
// -=  subtract and assign
// *=  multiply and assign
// /=  divide and assign
// %=  modulus and assign
// **= power and assign

let score = 10;
score += 5;  // 15
score -= 3;  // 12
score *= 2;  // 24
score /= 4;  // 6
score %= 4;  // 2
score **= 3; // 8

console.log("\nAssignment:");
console.log("score =", score);

// 3) Increment and decrement operators
// ++x (pre-increment): increase first, then use value
// x++ (post-increment): use value first, then increase
// --x and x-- work similarly for decrement

let x = 5;
console.log("\nIncrement/Decrement:");
console.log("++x =>", ++x); // 6
console.log("x++ =>", x++); // 6 (then x becomes 7)
console.log("x now =>", x); // 7
console.log("--x =>", --x); // 6
console.log("x-- =>", x--); // 6 (then x becomes 5)
console.log("x now =>", x); // 5

// 4) Comparison operators (result is true or false)
// ==   loose equality (compares value after type conversion)
// ===  strict equality (compares value and type)
// !=   loose not equal
// !==  strict not equal
// >, <, >=, <= as usual

const number1 = "11";
const number2 = 11;

console.log("\nComparison:");
console.log("'11' == 11 =>", number1 == number2);   // true
console.log("'11' === 11 =>", number1 === number2); // false
console.log("'11' != 11 =>", number1 != number2);   // false
console.log("'11' !== 11 =>", number1 !== number2); // true
console.log("10 > 8 =>", 10 > 8);                   // true
console.log("10 <= 8 =>", 10 <= 8);                 // false

// 5) Logical operators
// && AND  : true only if both conditions are true
// || OR   : true if at least one condition is true
// !  NOT  : flips true to false and false to true

const age = 20;
const hasID = true;

console.log("\nLogical:");
console.log("age >= 18 && hasID =>", age >= 18 && hasID); // true
console.log("age < 18 || hasID =>", age < 18 || hasID);   // true
console.log("!(age >= 18) =>", !(age >= 18));             // false

// 6) String concatenation and type conversion
// + works as addition for numbers and concatenation for strings

const s1 = "11";
const s2 = "22";

console.log("\nString + Conversion:");
console.log("'11' + '22' =>", s1 + s2);                       // "1122"
console.log("Number('11') + Number('22') =>", Number(s1) + Number(s2)); // 33

// 7) Conditional (ternary) operator
// condition ? valueIfTrue : valueIfFalse

const marks = 72;
const result = marks >= 40 ? "Pass" : "Fail";
console.log("\nTernary:");
console.log("Result =>", result);

// 8) Type operator
// typeof returns the data type of a value

console.log("\nType operator:");
console.log("typeof 123 =>", typeof 123);           // number
console.log("typeof 'hello' =>", typeof "hello");   // string
console.log("typeof true =>", typeof true);         // boolean
console.log("typeof undefined =>", typeof undefined); // undefined
console.log("typeof null =>", typeof null);         // object (historical JS behavior)

// 9) Bitwise operators (ayela na padhye ni huncha)
// &, |, ^, ~, <<, >>, >>> binary level Ma operate garana ko lagi

console.log("\nBitwise:");
console.log("5 & 1 =>", 5 & 1);   // 1
console.log("5 | 1 =>", 5 | 1);   // 5
console.log("5 ^ 1 =>", 5 ^ 1);   // 4
console.log("~5 =>", ~5);         // -6
console.log("5 << 1 =>", 5 << 1); // 10

// Quick reminder:
// real world broject ma == ko satta === use garnu to avoide unexpected errors
