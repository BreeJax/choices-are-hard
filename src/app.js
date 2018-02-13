import divide, { square, add, minus } from "./utils.js"
import isSenior, { isAdult, canDrink } from "./person.js"

//
console.log("Here we go again!")

console.log(square(4))
console.log(add(4, 99))
console.log(minus(4, 99))
console.log(divide(8, 4))

console.log("I am an Adult: " + isAdult(19))
console.log("I can drink: " + canDrink(19))
console.log("I am a Senior: " + isSenior(65))
