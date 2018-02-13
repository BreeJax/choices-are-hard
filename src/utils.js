console.log("this is sparta.js is running")

const square = (x) => x * x

const add = (a, b) => a + b

//named export
const minus = (a, b) => a - b

const divide = (a, b) => a / b

//export default divide (Do this if you want to export without {})
//export default (a, b) => a / b (Do this if you want to export without {} AND only having one line of code)

//named exports
export { square, add, minus, divide as default }

// exports - default -named exports

//YOU CAN ONLY SET UP A SINGLE DEFAULT
