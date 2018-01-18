console.log("Goblins!")

class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name
    this.age = age
  }
  getGreeting() {
    //    return "Hi, I am " + this.name + "!"
    return `Hi, I am ${this.name}!`
  }
  getDescription() {
    return `${this.name} is ${this.age} years old.`
  }
}

//this also works
// class Person {
//   constructor(name) {
//     this.name = name || "Anonymous"
//   }
// }
class Student extends Person {
  constructor(name, age, major) {
    super(name, age)
    this.major = major
  }
  hasMajor() {
    return !!this.major
  }
  getDescription() {
    let description = super.getDescription()
    if (this.hasMajor()) {
      description += ` Their major is ${this.major}`
    }
    return description
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age)
    this.homeLocation = homeLocation
  }
  getGreeting() {
    let greeting = super.getGreeting()
    if (this.homeLocation) {
      greeting += ` I am visiting from ${this.homeLocation}.`
    }
    return greeting
  }
}

const me = new Traveler("Bree Jackson", 27, "Dunedin")
console.log(me.getGreeting())

const other = new Traveler(undefined, undefined, "Nowhere")
console.log(other.getGreeting())
