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


//forEach
let number = [1, 2, 3, 4, 5];
number.forEach(display);

function double(element, array, index) {
    array[index] = element * 2;
}

function triple(element, array, index) {
    array[index] = element * 3;
}

function square(element, array, index) {
    array[index] = Math.pow(element, 2);
}

function display(element) {
    console.log(element);
}


//map() => membuat array baru dengan memodifikasi setiap elemen dari array lama
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.map(double)); // --> [1, 4, 9, 16, 25]

function double(element) {
    return Math.pow(element, 2);
}

//--------------------------------

const date = ["2024-01-10", "2024-02-14", "2024-03-17"];
console.log(date.map(formatDate));

function formatDate(element) {
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}


// filter() => membuat array baru dengan memfilter elemen dari array lama berdasarkan kondisi tertentu
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers.filter(isEven)); // --> [2, 4, 6, 8, 10]

function isEven(element) {
    return element % 2 === 0;
}


//reduce() => mengurangi array menjadi satu nilai berdasarkan fungsi yang diberikan
const numbers = [6, 21, 12, 30, 20];
console.log(`$${numbers.reduce(sum)}`); // --> $89

function sum(total, element) {
    return total + element;
}


//arrow function => fungsi yang lebih singkat dan mudah dibaca
const add = (num1, num2) => num1 + num2;
console.log(add(5, 10)); // --> 15

//-------------------------------
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); // --> [1, 4, 9, 16, 25]


//object => kumpulan data yang memiliki properti dan nilai
const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    hello: function () { console.log('Hi! I am ' + this.firstName) },
    fullName: function () { return this.firstName + " " + this.lastName }
};

const person2 = {
    firstName: "Jane",
    lastName: "Smith",
    age: 25,
    hello: function () { console.log('Hi! I am ' + this.firstName) },
    fullName: function () { return this.firstName + " " + this.lastName }
};

console.log(person1.firstName); // --> John
console.log(person1.fullName()); // --> John Doe
person1.hello(); // --> Hi! I am John



//THIS => keyword yang merujuk pada objek yang sedang digunakan
const person = {
    name: "Alice",
    greet: function () {
        console.log("Hello, my name is " + this.name);
    }
};
person.greet(); // --> Hello, my name is Alice



//CONSTRUCTOR FUNCTION => fungsi yang digunakan untuk membuat objek baru dengan properti dan metode yang sama
function car(make, model, year, color) {
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
    this.honk = function () {console.log(`you drive the ${this.model}`) }
}

const car1 = new car("Toyota", "Camry", 2020, "red");
const car2 = new car("Honda", "Civic", 2019, "blue");

console.log(car1.make); // --> Toyota
console.log(car1.model); // --> Camry
console.log(car1.year); // --> 2020
console.log(car1.color); // --> red
console.log(car1.honk()); // --> you drive the Camry

console.log(car2.model); // --> Civic
console.log(car2.year); // --> 2019
console.log(car2.color); // --> blue
console.log(car2.make); // --> Honda
console.log(car2.honk()); // --> you drive the Civic



//CLASS => blueprint untuk membuat objek dengan properti dan metode yang sama
class product {
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }

    display() {
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`); //toFixed(2) untuk membulatkan harga ke 2 desimal => $1000.00
        console.log(`Category: ${this.category}`);
    }

    calculateTotal(salestax) {
        return this.price + (this.price * salestax);
    }
}
const salestax = 0.5;
const product1 = new product("Laptop", 1000, "Electronics");
const product2 = new product("Shirt", 50, "Clothing");

product1.display();
// --> Product: Laptop
// --> Price: $1000
// --> Category: Electronics

product2.display();
// --> Product: Shirt
// --> Price: $50
// --> Category: Clothing

console.log(`Total price with sales tax: $${product1.calculateTotal(salestax).toFixed(2)}`);
// --> Total price with sales tax: $1500.00



//static method => metode yang dapat dipanggil tanpa membuat objek dari kelas tersebut
class user {
    static userCount = 0;

    constructor(username) {
        this.username = username;
        user.userCount++;
    }

    static getUserCount() {
        console.log(`Total users: ${user.userCount}`);
    }
    sayHello() {
        console.log(`Hello, my name is ${this.username}`);
    }
}

const user1 = new user("Alice");
const user2 = new user("Bob");
const user3 = new user("Charlie");

user1.sayHello(); // --> Hello, my name is Alice
user2.sayHello(); // --> Hello, my name is Bob
user3.sayHello(); // --> Hello, my name is Charlie
user.getUserCount(); // --> Total users: 3



//Inheritance => konsep dimana sebuah kelas dapat mewarisi properti dan metode dari kelas lain
class animals {
    alive = true;

    eat() {
        console.log(`This ${this.name} is eating.`);
    }
    sleep() {
        console.log(`This ${this.name} is sleeping.`);
    }
}

class dog extends animals {
    name = "dog";
    bark() {
        console.log("Woof! Woof!");
    }
}
class cat extends animals {
    name = "cat";
}
class fish extends animals {
    name = "fish";
}

const dog = new dog();
const cat = new cat();
const fish = new fish();

dog.eat(); // --> This dog is eating.
dog.sleep(); // --> This dog is sleeping.
dog.bark(); // --> Woof! Woof!
cat.eat(); // --> This cat is eating.
cat.sleep(); // --> This cat is sleeping.
fish.eat(); // --> This fish is eating.
fish.sleep(); // --> This fish is sleeping.


//SUPER => keyword yang digunakan untuk memanggil konstruktor atau metode dari kelas induk

class animals {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    move(speed) {
        console.log(`This ${this.name} is moving at ${speed}mph.`);
    }
}

class Rabbit extends animals {
    constructor(name, age, runSpeed) {
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run() {
        super.move(this.runSpeed);
    }
}
class Fish extends animals {
    constructor(name, age, swimSpeed) {
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

    swim() {
        super.move(this.swimSpeed);
    }
}
class Hawk extends animals {
    constructor(name, age, flySpeed) {
        super(name, age);
        this.flySpeed = flySpeed;
    }

    fly() {
        super.move(this.flySpeed);
    }
}

const rabbit = new Rabbit("Bunny", 2, 20);
const fish = new Fish("Nemo", 1, 10);
const hawk = new Hawk("Falcon", 5, 30);

console.log(`${rabbit.name} is ${rabbit.age} years old and can run at ${rabbit.runSpeed} km/h`);
// --> Bunny is 2 years old and can run at 20 km/h
console.log(`${fish.name} is ${fish.age} years old and can swim at ${fish.swimSpeed} km/h`);
// --> Nemo is 1 years old and can swim at 10 km/h
console.log(`${hawk.name} is ${hawk.age} years old and can fly at ${hawk.flySpeed} km/h`);
// --> Falcon is 5 years old and can fly at 30 km/h



//getter => metode yang digunakan untuk mengambil nilai dari properti
//setter => metode yang digunakan untuk mengubah nilai dari properti

class rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    set width(newWidth) {
        if (newWidth > 0) {
            this._width = newWidth;
        }
        else {
            console.error("Width must be a positive number.");
        }
    }
    set height(newHeight) {
        if (newHeight > 0) {
            this._height = newHeight;
        }
        else {
            console.error("Height must be a positive number.");
        }
    }

    get width() {
        return this._width;
    }
    get height() {
        return this._height;
    }
}

const myRectangle = new rectangle(3, 10);
myRectangle.width = -5;
myRectangle.height = -10;

console.log(myRectangle.width);
console.log(myRectangle.height);

//------------------------------

class person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName) {
        if(typeof newFirstName === "string" && newFirstName.length > 0) {
            this._firstName = newFirstName;
        }
        else {
            console.error("First name must be a non-empty string.");
        }
    }
    set lastName(newLastName) {
        if(typeof newLastName === "string" && newLastName.length > 0) {
            this._lastName = newLastName;
        }
        else {
            console.error("First name must be a non-empty string.");
        }
    }
    set age(newAge) {
        if(typeof newAge === "number" && newAge > 0) {
            this._age = newAge;
        }
        else {
            console.error("age must be a non-negative number.");
        }
    }

    get firstName() {
        return this._firstName;
    }
    get lastName() {
        return this._lastName;
    }
    get fullName() {
        return this._firstName + " " + this._lastName;
    }
    get age() {
        return this._age;
    }
}

const person1 = new person("John", "Doe", 30);
console.log(person1.fullName); // --> John Doe
console.log(person1.age); // --> 30
console.log(person1.firstName); // --> John
console.log(person1.lastName); // --> Doe
