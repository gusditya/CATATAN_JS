class animals {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Rabbit extends animals {

    constructor(name, age, runSpeed) {
        super(name, age);
        this.runSpeed = runSpeed;
    }
}
class Fish extends animals {
    constructor(name, age, swimSpeed) {
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
}
class Hawk extends animals {
    constructor(name, age, flySpeed) {
        super(name, age);
        this.flySpeed = flySpeed;
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
