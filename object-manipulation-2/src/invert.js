/* exported invert */

function invert(source) {
  var resultObj = {};
  for (var key in source) {
    resultObj[source[key]] = key;
  }
  return resultObj;
}
