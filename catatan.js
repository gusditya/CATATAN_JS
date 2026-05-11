console.log("hello world");

window.alert("this is an alert");
window.alert("i like pizza");

document.getElementById("myH1").textContent = "hello world";
document.getElementById("myP").textContent = "i like pizza";


// operators (+ - * / %)

let students = 30;
students = students + 1;
students = students - 1;
students = students * 1;
students = students / 1;
students = students ** 1;
students = students % 1;

students++; //--> students + 1
students--; //--> students - 1

// operator precedence
// 1. parenthesis ()
// 2. exponents (**)
// 3. multiplication and division and modulo (* / %)
// 4. addition and subtraction (+ -)



// HOW TO ACCEPT USER INPUT

//1. easy way (window.prompt)
let name = window.prompt("what is your name?");
window.alert("hello " + name);

//2. hard way (html textbox)
let username;
document.getElementById("mySubmit").onclick = function () {

    username = document.getElementById("myText").value;
    document.getElementById("myName").textContent = "hello " + username;

}

// TYPE CONVERSION

let age = window.prompt("How old are you?");
age = Number(age);
age += 1;
console.log(age);


const PI = 3.14;
let radius;
let area;

// radius = window.prompt("Enter the radius of the circle:");
// radius = Number(radius);
// area = 2 * PI * radius;

document.getElementById("mySubmit").onclick = function () {
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    area = 2 * PI * radius;
    document.getElementById("myH3").textContent = area + "cm";
}


// APP SEDERHANA
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countlabel = document.getElementById("countlabel");
let count = 0;

increaseBtn.onclick = function() {
    count++;
    countlabel.textContent = count;
}

resetBtn.onclick = function() {
    count = 0;
    countlabel.textContent = count;
}

decreaseBtn.onclick = function() {
    count--;
    countlabel.textContent = count;
}



// math = object js bawaan yang sudah ada di rumus matematika
PI = 3.14159
E = 2718281
dst

// membulatkan angka = math.round();
let x = 3.21;
let y = 2.67;
let z;

z = Math.round(x); // --> 3
z = Math.round(y); // --> 3

// Membulatkan ke bawah

let y = 3.99;
let z;

z = Math.floor(y); // --> 3
console.log(z);


//Math.round = membulatkan ke angka terdekat
//Math.floor = membulatkan ke angka kecil
//Math. ceil = membulatkan ke angka terbesar
//Math.trunc = menghilangkan angka desimalnya
//Math.pow = membuat pangkat dari angkanya, contoh :
let z = 3;
let x = 2;
let a = Math.pow(z, x); // --> 9
//Math.sqrt(x) = mencari akar


//IF STATEMENTS
const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const reslutElement = document.getElementById("resultElement");

mySubmit.onclick = function () {
    age = myText.value;
    age = Number(age);

    if (age > 18) {
        reslutElement.textContent = "you are an adult";
    }
    else if (age === 18) {
        reslutElement.textContent = "you are exactly 18 years old";
    }
    else if (age < 18) {
        reslutElement.textContent = "you are a minor";
    }
    else {
        reslutElement.textContent = "invalid input";
    }
}


const SubscribeBtn = document.getElementById("SubscribeBox");
const resultElement = document.getElementById("result");
const resultElement1 = document.getElementById("result1");
const resultElement2 = document.getElementById("result2");
const resultElement3 = document.getElementById("result3");
const VisaBtn = document.getElementById("VisaBox");
const MasterCardBtn = document.getElementById("MasterCardBox");
const PaypalBtn = document.getElementById("PaypalBox");
const Button = document.getElementById("submit");

Button.onclick = function () {
    if (SubscribeBtn.checked) {
        resultElement.textContent = "you have subscribed to our newsletter";
    }
    else {
        resultElement.textContent = "you have unsubscribed from our newsletter";
    }

    if (VisaBtn.checked) {
        resultElement1.textContent += " you have selected Visa as your payment method";
    }
    else {
        resultElement1.textContent += " you have not selected Visa as your payment method";
    }

    if (MasterCardBtn.checked) {
        resultElement2.textContent += " you have selected MasterCard as your payment method";
    }
    else {
        resultElement2.textContent += " you have not selected MasterCard as your payment method";
    }

    if (PaypalBtn.checked) {
        resultElement3.textContent += " you have selected Paypal as your payment method";
    }
    else {
        resultElement3.textContent += " you have not selected Paypal as your payment method";
    }
}


//shortcut if statement
//condition ? true : false
let time = 10;
let result = time < 12 ? "good morning" : "good afternoon";
console.log(result);

let money = 125;
let diskon = money >= 100 ?  10 : 0;
console.log(`Diskon anda adalah: $$(money - money * (diskon / 100))`);


//SWIRCH STATEMENT
let day = 3;
let month;

switch (day) {
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("I don't know");
        break;
    default:
        console.log("invalid day");
        break;
}

switch (day) {
    case day == 1:
       console.log("monday");
       break;
    }
console.log("month");


//Logical Operators
//AND (&&) --> true if both condition are true
//OR (||) --> true if at least one condition is true
//NOT (!) --> true if the condition is false
// == --> true if the value is equal
// === --> true if the value and type are equal
// != --> true if the value is not equal
// !== --> true if the value and type are not equal


//while loop
let Loggin = true;
let password;
let username;

do {
    username = window.prompt("Enter your username:");
    password = window.prompt("Enter your password:");

    if (username === "admin" && password === "password") {
        Loggin = false;
        window.alert("Login successful");
    }
    else {
        window.alert("Login failed, please try again");
    }
}while(!loggin)


//FOR LOOP
//continue = skip the current iteration
//break = exit the loop

for (let i = 1; i <= 10; i++) {

    if (1 == 5) {
        continue;
    }
    else {
        console.log(i);
    }
}


//NUMBER GUESSING GAME
const MinNumber = 1;
const MaxNumber = 100;
const randomNumber = Math.floor(Math.random() * (MaxNumber - MinNumber + 1)) + MinNumber;

let guess;
let attempts = 0;
let running = true;

while (running) {
    guess = window.prompt(`Guess a number between ${MinNumber} - ${MaxNumber}:`);
    guess = Number(guess);

    if (isNaN(guess)) {
        window.alert("Invalid input, please enter a number");
    }
    else if (guess < MinNumber || guess > MaxNumber) {
        window.alert("Invalid input, please enter a number");
    }
    else {
        attempts++;
        if (guess < randomNumber) {
            window.alert("Too low, try again");
        }
        else if (guess > randomNumber) {
            window.alert("Too high, try again");
        }
        else {
            window.alert(`Congratulations! You guessed the number in ${randomNumber} attempts`);
            running = false;
        }
    }
}

//FUNCTION

function happybirthday(username, age) {
    console.log(`Happy birthday ${username}, you are now ${age} years old!`);
    console.log("I hope you have a great day!");
    console.log("Don't forget to eat cake!");
}

happybirthday("John", 25);
happybirthday("Jane", 30);
happybirthday("Doe", 20);


function addNumbers(num1, num2) {
    return num1 + num2;
}
function subtractNumbers(num1, num2) {
    return num1 - num2;
}
function multiplyNumbers(num1, num2) {
    return num1 * num2;
}
function divideNumbers(num1, num2) {
    return num1 / num2;
}
function isEven(num) {
    return num % 2 === 0 ? "true" : "false";
}
function EmailValidation(email) {
    return email.includes("@") ? "valid email" : "invalid email";
}

console.log(EmailValidation("dwipadps123@gmail.com"));
console.log(EmailValidation("dwipadps123gmail.com"));


//Variable Scope
let globalVar = "I am global";

function myFunction() {
    let localVar = "I am local";
    console.log(globalVar);
    console.log(localVar);
}

myFunction();
console.log(globalVar);


//APLIKASI CEK SUHU

const input = document.getElementById('input');
const toFahrenheit = document.getElementById('toFahrenheit');
const toCelsius = document.getElementById('toCelsius');
const result = document.getElementById('result');
let temp;

function convert() {
    if (toFahrenheit.checked) {
        temp = Number(input.value);
        temp = (temp * 9 / 5) + 32;
        result.textContent = temp.toFixed(1) + " °F";
    }
    else if (toCelsius.checked) {
        temp = Number(input.value);
        temp = (temp - 32) * 5 / 9;
        result.textContent = temp.toFixed(1) + " °C";
    }
    else {
        result.textContent = "Please select a conversion type.";
    }
}


//ARRAY
let fruits = ["apple", "banana", "orange"];
console.log(fruits[0]); // --> apple
console.log(fruits[1]); // --> banana
console.log(fruits[2]); // --> orange

let index = fruits.indexOf("banana");
console.log(index); // --> 1

fruits.push("grape");
console.log(fruits); // --> ["apple", "banana", "orange", "grape"]


//SPREAD OPERATOR
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [...arr1, 6, 7, 8, 9, 10];
let maximum = Math.max(...arr1);
console.log(maximum); // --> 5


//REST PARAMETER
function sum(...numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
}
console.log(sum(1, 2, 3, 4, 5)); // --> 15


//ROLE DADU
function rollbutton() {
    const diceCount = document.getElementById('diceCount').value;
    const result = document.getElementById('result');
    const imageContainer = document.getElementById('image');
    const value = [];
    const images = [];

    for (let i = 0; i < diceCount; i++) {
        const randomValue = Math.floor(Math.random() * 6) + 1;
        value.push(randomValue);
        images.push(`<img src="dadu/${randomValue}.png">`);
    }

    result.textContent = `Hasil: ${value.join(', ')}`;
    imageContainer.innerHTML = images.join('');
}


//RANDOM PASSWORD GENERATOR


