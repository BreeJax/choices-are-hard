const multiplier = {
  numbers: [1, 66, 78, 92, 17],
  multiplyBy: 5,
  getMultiply() {
    return this.numbers.map((nums) => this.multiplyBy * nums)
  }
}
console.log(multiplier.getMultiply())
