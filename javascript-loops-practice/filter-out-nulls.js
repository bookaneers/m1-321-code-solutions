/* exported filterOutNulls */
function filterOutNulls(values) {
  var valuesNoNulls = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      valuesNoNulls.push(values[i]);
    }
  }
  return valuesNoNulls;
}
