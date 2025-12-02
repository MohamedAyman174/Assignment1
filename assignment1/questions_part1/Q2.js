function checkFalsy(variable) {
  if (!variable) {
    return "invalid";
  }
  return variable;
}
console.log(checkFalsy(0));
