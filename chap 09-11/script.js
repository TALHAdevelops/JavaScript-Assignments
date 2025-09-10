// Question No 1

var city_name = prompt("Enter the name of a city:");

if (city_name === "Karachi") {
    alert("Welcome to the city of lights");
}

// Question No 2

var gender = prompt("Enter your gender (male/female):");

if (gender === "male") {
    alert("Good morning, Sir!");
} else if (gender === "female") {
    alert("Good morning, Ma'am!");
}

// Question No 3

var traffic_signal = prompt("Enter the color of the traffic signal (red/yellow/green):");

if (traffic_signal === "red") {
    alert("Stop");
}
if (traffic_signal === "yellow") {
    alert("Ready to move");
}
if (traffic_signal === "green") {
    alert("Move");
}

// Question No 4

var fuel = prompt("Enter the remaining fuel in your car (in litres):");

if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}

// Question No 5

var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

if (true) {
    alert("True");
}
if (false) {
    alert("False");
}
if ("car" < "cat") {
    alert("car is smaller than cat");
}

// Question No 6

var totalMarks = 300;
var obtainedMarks = 219;
var percentage = (obtainedMarks / totalMarks) * 100;
var grade, remarks;

if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} 
if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
}
if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
}
if (percentage < 60) {
    grade = "Fail";
    remarks = "Sorry";
}

document.write("<h1>Marks Sheet</h1>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Obtained Marks: " + obtainedMarks + "<br>");
document.write("Percentage: " + percentage + "%<br>");
document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remarks + "<br>");

// Question No 7

var secretNumber = 7;
var userGuess = +prompt("Guess the secret number (between 1 and 10):");

if (userGuess === secretNumber) {
    alert("Bingo! Correct answer");
}
if (userGuess !== secretNumber ) {
    alert("Close enough to the correct answer");
}

// Question No 8

var number = +prompt("Enter a number to check if it is divisible by 3:");

if (number % 3 === 0) {
    alert("The number is divisible by 3.");
} 

// Question No 9

var numberToCheck = +prompt("Enter a number to check if it is even or odd:");

if (numberToCheck % 2 === 0) {
    alert("The number is even.");
}
if (numberToCheck % 2 !== 0) {
    alert("The number is odd.");
}

// Question No 10

var temperature = +prompt("Enter the temperature in Celsius:");

if (temperature > 40) {
    alert("It's too hot outside.");
}
if (temperature > 30) {
    alert("The weather today is normal.");
}
if (temperature > 20) {
    alert("Today's weather is cool.");
}
if (temperature > 10) {
    alert("OMG! Today's weather is so cool.");
}

// Question No 11

var firstNumber = +prompt("Enter the first number:");
var secondNumber = +prompt("Enter the second number:");
var operation = prompt("Enter the operation (+, -, *, /, %):");

if (operation === "+") {
    alert("Result: " + (firstNumber + secondNumber));
}
if (operation === "-") {
    alert("Result: " + (firstNumber - secondNumber));
}
if (operation === "*") {
    alert("Result: " + (firstNumber * secondNumber));
}
if (operation === "/") {
    alert("Result: " + (firstNumber / secondNumber));
}
if (operation === "%") {
    alert("Result: " + (firstNumber % secondNumber));
}

