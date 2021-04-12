/* exported countdown */

function countdown(number) {
  var arrayOfNumbers = [];
  for (var i = number; i >= 0; i--) {
    arrayOfNumbers.push(i);
  }
  return arrayOfNumbers;
}
