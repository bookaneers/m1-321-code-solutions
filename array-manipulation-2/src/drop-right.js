/* exported dropRight */

function dropRight(array, count) {
  var resultArray = [];
  if (array.length === 0) return resultArray;
  for (var i = 0; i < array.length - count; i++) {
    resultArray.push(array[i]);
  }
  return resultArray;
}
