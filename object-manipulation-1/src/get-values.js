/* exported getValues */

function getValues(object) {
  var valuesOfObj = [];
  for (var key in object) {
    valuesOfObj.push(object[key]);
  }
  return valuesOfObj;
}
