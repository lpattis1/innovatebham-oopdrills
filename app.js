// 5 Object Literals

const person1 = {
  name: "Lauren",
  sayHello: function () {
    console.log(`Hello! My name is ${person1.name}`);
  },
};

const person2 = {
  name: "Bailey",
  sayHello: function () {
    console.log(`Hello! My name is ${person2.name}`);
  },
};

const person3 = {
  name: "Eric",
  sayHello: function () {
    console.log(`Hello! My name is ${person3.name}`);
  },
};

const person4 = {
  name: "Colleen",
  sayHello: function () {
    console.log(`Hello! My name is ${person4.name}`);
  },
};

const person5 = {
  name: "Marshall",
  sayHello: function () {
    console.log(`Hello! My name is ${person5.name}`);
  },
};

// Call the sayHello function on each object literal

person1.sayHello();
person2.sayHello();
person3.sayHello();
person4.sayHello();
person5.sayHello();

// ------------------------------------

// Constructor (ES5 way)

function Person(name, city, age) {
  this.name = name;
  this.city = city;
  this.age = age;
}

Person.prototype.greet = function () {
  return `Hey! My name is ${this.name}. I am ${this.age} years old and live in ${this.city}`;
};

const es5Person1 = new Person("John", "Wilmington", 26);
const es5Person1Greet1 = es5Person1.greet();

const es5Person2 = new Person("Jane", "Paris", 21);
const es5Person1Greet2 = es5Person2.greet();

const es5Person3 = new Person("Jessica", "New York City", 42);
const es5Person1Greet3 = es5Person3.greet();

const es5Person4 = new Person("Jheff", "Dubai", 34);
const es5Person1Greet4 = es5Person4.greet();

const es5Person5 = new Person("Jessepe", "Birmingham", 15);
const es5Person1Greet5 = es5Person3.greet();

console.log(es5Person1);
console.log(es5Person1Greet1);

console.log(es5Person2);
console.log(es5Person1Greet2);

console.log(es5Person3);
console.log(es5Person1Greet3);

console.log(es5Person4);
console.log(es5Person1Greet4);

console.log(es5Person5);
console.log(es5Person1Greet5);

// ------------------------------------

// Constructor (ES6 way)

class Human {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }

  sayHi() {
    return `Hi, my name is ${this.name}. I'm ${this.age} years old and I live in ${this.city}`;
  }
}

const p1 = new Human("Thom", 24, "Candyland");
const p1Greet = p1.sayHi();

const p2 = new Human("Thammy", 80, "Retirementland");
const p2Greet = p2.sayHi();

const p3 = new Human("Thandice", 28, "Iowaville");
const p3Greet = p3.sayHi();

const p4 = new Human("Thois", 43, "Family Guy");
const p4Greet = p4.sayHi();

const p5 = new Human("Thistle", 56, "Rivia");
const p5Greet = p5.sayHi();

console.log(p1);
console.log(p1Greet);

console.log(p2);
console.log(p2Greet);

console.log(p3);
console.log(p3Greet);

console.log(p4);
console.log(p4Greet);

console.log(p5);
console.log(p5Greet);

// ------------------------------------

// Inheritance

// Parent:

class Vehicle {
  constructor(manufacturer, wheels) {
    this.manufacturer = manufacturer;
    this.wheels = wheels;
  }

  aboutVehicle(carType) {
    console.log(
      `This vehicle is a ${carType}. It was made by ${this.manufacturer} and has ${this.wheels} wheels.`
    );
  }
}

const ferrariTributo = new Vehicle("Ferrari", 4);
ferrariTributo.aboutVehicle("supercar");

// Child:

class Truck extends Vehicle {
  constructor(wheels, doors, bed) {
    super(wheels);

    this.doors = doors;
    this.bed = bed;
  }

  aboutVehicle() {
    if (this.bed) {
      console.log(
        `This vehicle is a truck. It has 4 wheels and ${this.doors} doors. It features a bed.`
      );
    } else {
      console.log(
        `This vehicle is a truck. It has 4 and ${this.doors} doors. It does not feature a bed.`
      );
    }
  }
}

const cybertruck = new Truck(4, 4, true);
cybertruck.aboutVehicle();

// Child:

class Sedan extends Vehicle {
  constructor(wheels, size, mpg) {
    super(wheels);

    this.size = size;
    this.mpg = mpg;
  }

  aboutVehicle() {
    console.log(
      `This vehicle is a sedan. It has 4 wheels. It does not feature a truck bed, is ${this.size} in size, and gets ${this.mpg} mpg.`
    );
  }
}

const camry = new Sedan(4, "medium", 28);
camry.aboutVehicle();

// Child:

class Motorcycle extends Vehicle {
  constructor(wheels, handlebars, doors) {
    super(wheels);

    this.handlebars = handlebars;
    this.doors = doors;
  }

  aboutVehicle() {
    if (!this.doors) {
      console.log(
        `This vehicle is a motorcycle. It does not have doors and only has 2 wheels. It has ${this.handlebars} rather than a steering wheel.`
      );
    }
  }
}

const harleyDavidson = new Motorcycle(2, "handlebars", false);
harleyDavidson.aboutVehicle();
