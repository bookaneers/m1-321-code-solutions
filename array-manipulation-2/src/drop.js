/* exported drop */

function drop(array, count) {
  var resultArray = [];
  if (array.length === 0) return resultArray;
  for (var i = count; i < array.length; i++) {
    resultArray.push(array[i]);
  }
  return resultArray;
}
