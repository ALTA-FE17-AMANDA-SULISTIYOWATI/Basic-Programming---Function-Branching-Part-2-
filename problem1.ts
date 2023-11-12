function studentScore(score: number): string {
  if (score >= 80 && score <= 100) {
    return "Nilai A"
  } else if (score >= 65 && score <= 79) {
    return "Nilai B+"
  } else if (score >= 50 && score <= 64) {
    return "Nilai B"
  } else if (score >= 35 && score <= 49) {
    return "Nilai C"
  } else if (score >= 0 && score <= 34) {
    return "Nilai D"
  } else {
    return "Invalid"
  }
}

console.log(studentScore(80))
