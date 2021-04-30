/* exported zip */
function zip(first, second) {
  var bigArray = [];
  for (var i = 0; i < first.length; i++) {
    if (i === second.length) return bigArray;
    var smallArray = [];
    smallArray.push(first[i]);
    smallArray.push(second[i]);
    bigArray.push(smallArray);

  }
  return bigArray;
}
