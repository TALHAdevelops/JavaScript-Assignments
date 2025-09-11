// Question No 1

var char = prompt("Enter a character(num or letter): ");
if (char >= '0' && char <= '9') {
    alert("You entered a number: " + char);
}
else if (char >= 'a' && char <= 'z') {
    alert("You entered a lowercase letter: " + char);
}
else if (char >= 'A' && char <= 'Z') {
    alert("You entered an uppercase letter: " + char);
}
else {
    alert("You entered a special character: " + char);
}

// Question No 2

var num1 = +prompt("Enter first number: ");
var num2 = +prompt("Enter second number: ");

if (num1 > num2) {
    alert("The larger number is: " + num1);
}
else if (num2 > num1) {
    alert("The larger number is: " + num2);
}
else {
    alert("Both numbers are equal: " + num1);
}

// Question No 3

var num = +prompt("Enter a number: ");

if (num > 0) {
    alert("The number is positive: " + num);
}
else if (num < 0) {
    alert("The number is negative: " + num);
}
else {
    alert("The number is zero.");
}

// Question No 4

var char = prompt("Enter a character: ");
if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
    char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
    alert("The character is a vowel: " + char);
}
else {
    alert("The character is a consonant: " + char);
}

// Question No 5

var password = "password123";
var userInput = prompt("Enter your password: ");

if (userInput === "") {
    alert("Please enter your password.");
}
else if (userInput === password) {
    alert("Correct! The password you entered matches the original password.");
}
else {
    alert("Incorrect password.");
}

// Question No 6

var greeting;
var hour = 13; // Example hour
if (hour < 18) {
    greeting = "Good day";
} // missing Block Bracket
else {
    greeting = "Good evening";
}

// Question No 7

var time = +prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM): ");

if (time >= 0 && time < 1200) {
    alert("Good morning!");
}
else if (time >= 1200 && time < 1700) {
    alert("Good afternoon!");
}
else if (time >= 1700 && time < 2100) {
    alert("Good evening!");
}
else {
    alert("Good night!");
}


