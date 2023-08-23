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
// markBMI = markMass / markHeight ** 2;
// johnBMI = johnMass / johnHeight ** 2;

// console.log(markBMI, johnBMI);


// Step 3 - Create a boolean variable 'markHigherBMI'
// markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);


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
else if(dayOfTheWeek === 'Tuesday'){
    console.log('Go for Lectures');
}
else if(dayOfTheWeek === "Friday"){
    console.log("Go Shopping!!!!!!!!!");
}
else{
    console.log("Write some code!")
}

////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / johnHeight ** 2;

console.log(markBMI, johnBMI);

if(markBMI > johnBMI){
    console.log(`Marks's BMI ${markBMI} is higher than John's ${johnBMI}`);
}
else{
    console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}`);
}

// *********************** Type Conversion and Coersion *********************************
// Type conversion is the process of converting a value from one type to another
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 10);

console.log(Number('Donald'));

console.log(String(23), 23);

// Type Coersion
// Type coersion is when JavaScript coerces or changes a data type by itself

const sum = 35 + 'hello';
console.log(sum);

console.log('23' - '10' - 3);

console.log('24' / '2');

let n = '1' + 1;
n = n - 1;
console.log(n);


// ******************************************** Truthy and Falsy Values *********************************************

// We have 5 Falsey Values: 0, '', undefined, null, Nan
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

let moneyMaker = 'Hi';

if(moneyMaker){
    console.log('Buy something nice');
}
else{
    console.log('Save the money!');
}

// ********************************************* Logical Operators ***************************************************
/* Logical Operators are used to determine the logic between vairables or values
    && is the AND Operator
    || is the OR Operator
    ! is the NOT Operator   
*/

const hasDriversLicense = true;
const hasGoodVision = true;
const isTired = false;

if(hasDriversLicense && hasGoodVision || isTired){
    console.log('Donald is Eligible to Drive');
}
else{
    console.log('Someone else should drive');
}


/* Coding Challange 3 - If Statements and Opeartors
There are two football teams, Manchester and Barcelona. They compete against each other 3 times. The team with the highest average score will win the trophy!

1. Calculate the average score for each team using the test data below.

2. Compare the average scores of the teams to determine the winner of the competition and display it on the console. Remember to account for a possible draw, where both teams have the same average score.

3. BONUS 1: Introduce a minimum score requirement of 100. According to this rule, a team can only win if it has a higher score than the other team and a score of at least 100 points. Hint: Use a logical operator to test for the minimum score, along with multiple else-if blocks. 😉

4. BONUS 2: The minimum score requirement also applies to a draw. A draw will only occur if both teams have the same score and both teams have a score greater than or equal to 100 points. Otherwise, neither team wins the trophy.

TEST DATA: Manchester scores 96, 108, and 89. Barcelona scores 88, 91, and 110.
TEST DATA BONUS 1: Manchester scores 97, 112, and 101. Barcelona scores 109, 95, and 123.
TEST DATA BONUS 2: Manchester scores 97, 112, and 101. Barcelona scores 109, 95, and 106.
GOOD LUCK! 😀

*/

// Step 1
const manchesterScore = (96 + 108 + 89) / 3;
const barcelonaScore = (88 + 91 + 110) / 3;

console.log(manchesterScore, barcelonaScore);


// Step 2
if(manchesterScore > barcelonaScore){
    console.log("Manchester wins the Trophy 🏆");
}
else if(barcelonaScore > manchesterScore){
    console.log("Barcelona wins the Trophy 🏆");
}
else if(manchesterScore === barcelonaScore){
    console.log("It's a Draw!");
}

// Step 3
const manchesterScore2 = (97 + 112 + 101) / 3;
const barcelonaScore2 = (109 + 95 + 123) / 3;
console.log(manchesterScore2, barcelonaScore2);


if(manchesterScore2 > barcelonaScore2 && manchesterScore2 >= 100){
    console.log("Manchester wins the Trophy 🏆");
}
else if(barcelonaScore2 > manchesterScore2 && barcelonaScore2 >= 100){
    console.log("Barcelona wins the Trophy 🏆");
}
else if(manchesterScore2 === barcelonaScore2 && manchesterScore2 >= 100 && barcelonaScore2 >= 100){
    console.log("Both Teams win the Trophy 🏆");
}
else{
    console.log("Nobody wins the Trophy 😭");
}

// ******************************************* The Switch Statement *************************************************
const day = "23";

switch(day){
    case 'Monday':
        console.log("Sit at home 🏠");
        break;
    case 'Tuesday':
        console.log("Attend class 🔥");
        break;
    case 'Wednesday':
        console.log("Sleep 🚀");
        break;
    case 'Thursday':
    case 'Friday':
    console.log("Watch Movies 🍿");
    break;
    case 'Saturday':
    case 'Sunday':
        console.log("Thank God 🙏🏿");
        break;
    default:
        console.log("Don't do anything");
}

// --------------------------------------- Tasks (22-08-23) -----------------------------------------------------

// Express the Switch Statement in an If else if else condition


// ************************************** The Ternary Operator ************************************************
////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 

*/
