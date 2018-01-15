var nameVar = "Bree"
var nameVar = "Mark"
console.log("nameVar", nameVar)

//danger of var: can redefine and re-assign
//let an const fixes this.

let nameLet = "Lily"
nameLet = "Owen"
console.log("nameLet", nameLet)

//with let, you can reassign but not redefine.

const nameConst = "Sara"
console.log("nameConst", nameConst)

//const, cannot redefine OR reassign

function getPetName() {
  const petName = "Hal"
  return petName
}
getPetName()
console.log(getPetName)

//is not available in the parent global scope
