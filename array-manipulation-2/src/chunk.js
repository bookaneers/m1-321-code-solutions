/* exported chunk */

function chunk(array, size) {
  var small = [];
  var big = [];
  var counter = 0;
  for (var i = 0; i < array.length; i++) {
    small.push(array[i]);
    counter++;
    if (counter === size || i === array.length - 1) {
      big.push(small);
      small = [];
      counter = 0;
    }
  }
  return big;
}
