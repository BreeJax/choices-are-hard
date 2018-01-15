const square = function(x) {
  return x * x
}

console.log(square(8))

const circle = (x) => {
  return x * 2
}

console.log(circle(9))

// const getFirstName = (fullName) => {
//   return fullName.split(" ")[0]
// }

const getFirstName = (fullName) => fullName.split(" ")[0]

console.log(getFirstName("Mark Smith"))
