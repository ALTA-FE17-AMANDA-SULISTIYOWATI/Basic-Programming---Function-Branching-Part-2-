function palindrome(str: string): boolean {
  const cleanedStr = str.replace(/\s/g, "").toLowerCase()

  return cleanedStr === cleanedStr.split("").reverse().join("")
}

console.log(palindrome("civic"))
console.log(palindrome("katak"))
console.log(palindrome("kasur rusak"))
console.log(palindrome("kupu-kupu"))
console.log(palindrome("lion"))
