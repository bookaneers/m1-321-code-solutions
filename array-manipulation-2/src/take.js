/* exported take */

function take(array, count) {
  var resultArray = [];
  if (array.length === 0) return [];
  for (var i = 0; i < count; i++) {
    resultArray.push(array[i]);
  }
  return resultArray;
}
