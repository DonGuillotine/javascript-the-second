// ************************ Values and Variables ************************
console.log("Hello World!");

let firstname = "Guy";

console.log(firstname);


// ************************* Variable Naming Conventions *****************
let obinna4 = "Obinna";
let _charles = "Charles";
let $chidubem = "Chidubem";

console.log(obinna4, _charles, $chidubem);


// ************************* Data types *********************************

/*
JavaScript has 8 Datatypes
    1. String
    2. Number
    3. Bigint
    4. Boolean
    5. Undefined
    6. Null
    7. Symbol
    8. Object
 */


// Booleans -> True or False Values
var javaScriptIsEasy = true;
var lifeIsHard = false;


console.log(typeof lifeIsHard);


// Numbers
var chekwube = 30;
let kingsley = 29.8;

console.log(typeof chekwube);
console.log(typeof kingsley);


// Strings
let message = "Welcome to France";
console.log(typeof message);

let guy = "34";
console.log(typeof guy);

let donald = "24" + 2;
console.log(donald, typeof donald);

// Undefined
let year;
console.log(year, typeof year);

// An empty value has nothing to do with 'undefined'
let car = '';
console.log(typeof car);

// When adding a number and a string, JavaScript will treat the number as a string.
let vehicle = 16 + 4 + "Volvo";
console.log(vehicle, typeof vehicle);

/* Null
    In JavaScript null is nothing. It is supposed to be something that doesn't exist.
    The data type of null of object
*/

let money = null;
console.log(money, typeof money);


/**
 * Difference between undefined and null
 * Typeof undefined is undefined
 * Typeof null is object 
 */

// Similarities
console.log(null === undefined);


// ***************************** let, const and var **********************

/* The let keyword

The let keyword was introduced in ES6 (2015)

    **Rules**
    1. let cannot be Redeclared
    2. let must be Declared before use
    3. let has Block Scope
*/

// 1. let cannot be redeclared
let subject = "Mathematics";
// let subject = "English";

// var can be redeclared
var friut = "Orange";
var friut = "Apple";

console.log(friut);


// 2. let must be Declared before use
// console.log(myVariable);

// let myVariable = 10;

let myNumber = 10;

console.log(myNumber);

/* Hoisting -> You can use the variable before it is declared 
-------let and const are not hoisted-----------
*/
sayHiToMe = "Hi Donald";
var sayHiToMe;
console.log(sayHiToMe);