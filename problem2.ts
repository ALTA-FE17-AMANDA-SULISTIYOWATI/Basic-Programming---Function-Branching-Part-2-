function exponentiation(x: number, n: number): number | string {
  if (n < 0) {
    return "wrong input"
  }
  return Math.pow(x, n)
}

console.log(exponentiation(2, 3))
console.log(exponentiation(2, 12))
console.log(exponentiation(7, 2))
console.log(exponentiation(9, 3))
console.log(exponentiation(22, 5))
console.log(exponentiation(1996, 0))
console.log(exponentiation(4213, -3))
