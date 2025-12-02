function checkDivisible(num) {
  if (num % 3 === 0 && num % 5 === 0) return "Divisible by both";
  return "Not divisible by both";
}
console.log(checkDivisible(15))