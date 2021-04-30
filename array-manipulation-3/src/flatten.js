/* exported flatten */
function flatten(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (var k = 0; k < array[i].length; k++) {
        result.push(array[i][k]);
      }
    } else {
      result.push(array[i]);
    }
  }
  return result;
}
