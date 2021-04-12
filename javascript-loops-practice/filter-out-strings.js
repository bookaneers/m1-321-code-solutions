/* exported filterOutStrings */

function filterOutStrings(values) {
  var onlyNumbers = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] === 'number') {
      onlyNumbers.push(values[i]);
    }
  }
  return onlyNumbers;
}
