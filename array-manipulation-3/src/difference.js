/* exported difference */
function difference(first, second) {
  var result = [];
  for (var i = 0; i < first.length; i++) {
    if (!result.includes(first[i]) && !second.includes(first[i])) result.push(first[i]);
  }
  for (var k = 0; k < second.length; k++) {
    if (!result.includes(second[k]) && !first.includes(second[k])) result.push(second[k]);
  }
  return result;
}
