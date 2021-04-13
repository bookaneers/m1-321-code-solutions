/* exported compact */

function compact(array) {
  var resultArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      resultArray.push(array[i]);
    }
  }
  return resultArray;
}
