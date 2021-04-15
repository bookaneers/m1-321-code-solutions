/* exported capitalizeWords */

function capitalizeWords(string) {
  string = string.slice(0, string.length).toLowerCase();
  var array = string.split(' ');
  for (var i = 0; i < array.length; i++) {
    array[i] = array[i][0].toUpperCase() + array[i].slice(1);
  }
  return array.join(' ');
}
