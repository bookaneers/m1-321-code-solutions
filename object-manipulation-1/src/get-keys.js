/* exported getKeys */

function getKeys(object) {
  var keysOfObj = [];
  for (var key in object) {
    keysOfObj.push(key);
  }
  return keysOfObj;
}
