class Person {
  constructor (name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting () {
    return `Hi. I am ${this.name}!`;
  }
  getDescription () {
    return `${this.name} is ${this.age} year(s) old.`
  }
}

class Student extends Person {
  constructor(name, age, major){
    super(name, age);
    this.major = major;
  }
  hasMajor () {
    return !!this.major; 
  }
  getDescription () {
    let description = super.getDescription();

    if (this.hasMajor ()) {
      description += ` Their major is ${this.major}.`;
    }

    return description;
  }
}

class Traveler extends Person {
  constructor (name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  hasLocation () {
    return !!this.homeLocation;
  }
  getGreeting () {
    let greeting = super.getGreeting();

    if (this.hasLocation ()) {
      greeting += ` I'm visiting from ${this.homeLocation}.`;
    }

    return greeting;
  }
}

const me = new Student('Laercio Vitorino', 32, 'Computer Science');
console.log(me.hasMajor());
console.log(me.getDescription());

const other = new Student();
console.log(other.hasMajor());
console.log(other.getDescription());

const oneTraveler = new Traveler();
console.log(oneTraveler.hasLocation());
console.log(oneTraveler.getGreeting());

const anotherTraveler = new Traveler('John Doe', 25, 'Campina Grande');
console.log(anotherTraveler.hasLocation());
console.log(anotherTraveler.getGreeting());

const aThirdTraveler = new Traveler('Janne Doe', 25);
console.log(aThirdTraveler.hasLocation());
console.log(aThirdTraveler.getGreeting());