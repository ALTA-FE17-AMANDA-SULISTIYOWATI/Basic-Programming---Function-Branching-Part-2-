function primeNumber(number: number): boolean {
  if (number <= 1) {
    return false
  }
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return false
    }
  }
  return true
}

console.log(primeNumber(11))
console.log(primeNumber(13))
console.log(primeNumber(17))
console.log(primeNumber(20))
console.log(primeNumber(35))
