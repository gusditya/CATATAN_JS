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
