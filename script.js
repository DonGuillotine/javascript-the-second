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


let numberTwo = 2 + 5;
numberTwo *= 7;
console.log(numberTwo);

let numberThree = 1;
numberThree++; // numberThree = numberThree + 1;
console.log(numberThree);


let numberFour = 4;
numberFour--; // numberFour = numberFour - 1;
console.log(numberFour);


// ----------- Comparison Operators (>, <, >=, <=, ==, ===) -------------

let obinnaAge, charlesAge;

obinnaAge = '35';
charlesAge = 29;

console.log(obinnaAge <= charlesAge);


// ------------------- Operator Precedence ----------------------
const yearNow = 2023;
const guysAge = yearNow - 1982;
const chidubemAge = yearNow - 1990;


// console.log(guysAge, chidubemAge, guysAge + chidubemAge);
console.log((guysAge + chidubemAge) * 10);


/* ------------- CODING CHALLANGE -> JavaScript Operators ---------------

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

*/

// Step 1 - Store Mark and John's mass and height in variables
let markMass, markHeight, johnMass, johnHeight, markBMI, johnBMI, markHigherBMI;
markMass = 78;
markHeight = 1.69;

johnMass = 92;
johnHeight = 1.95;


// Step 2 - Mark and John's BMI using the formular: BMI = mass / height ** 2 
markBMI = markMass / markHeight ** 2; // markMass / markHeight * markHeight
johnBMI = johnMass / johnHeight ** 2;

console.log(markBMI, johnBMI);


// Step 3 - Create a boolean variable 'markHigherBMI'
markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);


// ***************************** Strings and Template Literals ***************************
const myName = "Donald";
const myJob = "Backend Developer";
const yearOfBirth = 1888;
const currentYear = 2023;

const donaldNew = "I'm " + myName + ", a " + (currentYear - yearOfBirth) + " year old " + myJob + "!";
console.log(donaldNew);

const donaldnewer = `I'm ${myName}, a ${currentYear - yearOfBirth} year old ${myJob}`;
console.log(donaldnewer);


// ************************* Taking Decisions: if / else Statement ***********************
const johnAge = 18;

if(johnAge >= 18){
    console.log(`John is eligible to drink Alchohol 🍺, because his age is ${johnAge}`);
}
else{
    const yearsLeft = 18 - johnAge;
    console.log(`John is not eligible to drink Alchohol 😭. Wait another ${yearsLeft} years`);
}

let dayOfTheWeek = 'Tuesday';

if(dayOfTheWeek === 'Monday'){
    console.log("SIT AT HOME 🏠");
}
else{
    console.log("Write some code!")
}

