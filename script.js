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
sayHiToMe = console.log("Hi Donald");
var sayHiToMe;


// 3. let has Block Scope
{
    let job = 5;
    console.log(job);
}

// console.log(job);


// ----------------- var does not have block scope -----------------------
{
    var animal = "Lion"
}

console.log(animal);


// ------------------var Redeclaring a variable inside a block will also redeclare the variable outside the block-----------------------------------------
var macBook = 10;

{
    var macBook = 200;
}

console.log(macBook);

//--------------------------let Redeclaring a variable inside a block will not redeclare the variable outside the block--------------------

let windows = 5;

{
    let windows = 6000;
}

console.log(windows);


/* The const keyword

The const keyword was introduced in ES6 (2015)

    **Rules**
    1. const cannot be Reassigned
    2. const cannot be Redeclared
    3. const has Block Scope
*/

// 1. const cannot be Reassigned
const costFromTempSiteToKodex = 200;
// costFromTempSiteToKodex = 100;
// console.log(costFromTempSiteToKodex);


// 2. const cannot be Redeclared
// const yes = true;
// const yes = no;


// ************************** Basic Operators ****************************

// Math Operators (Subtraction)
const now = 2023;
const kingsleyAge = now - 1988;
const chekwubeAge = now - 1990;


console.log(kingsleyAge, chekwubeAge);


// Multiplication, Division and raise to power
console.log(kingsleyAge * 2, kingsleyAge / 5, chekwubeAge ** 3);


/**
 * Create 2 variables
 * The datatype must be strings
 * Add the two varaibles
 * And display the result in the console
 */

let firstName = "Donald";
let lastName = "Nwokoro";

console.log(firstName + " " + lastName);


// -------------------- Assignment Operators (=) -------------------------
let numberOne = 10 + 5;

numberOne += 5; // numberOne = numberOne + 5;

console.log(numberOne);