/* exported takeRight */

function takeRight(array, count) {
  var resultArray = [];
  if (array.length === 0) return resultArray;
  for (var i = array.length - count; i < array.length; i++) {
    resultArray.push(array[i]);
  }
  return resultArray;
}
