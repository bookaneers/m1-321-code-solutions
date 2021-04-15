/* exported ransomCase */

function ransomCase(string) {
  string = string.toLowerCase();
  var stringArray = string.split('');
  var tempArray = [];
  for (var i = 0; i < stringArray.length; i++) {
    if (i % 2 === 1) {
      tempArray.push(stringArray[i].toUpperCase());
    } else {
      tempArray.push(stringArray[i]);
    }
  }
  return tempArray.join('');
}
