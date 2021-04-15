/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  var tempArray = string.split('');
  var tempIndex = tempArray[firstIndex];
  tempArray[firstIndex] = tempArray[secondIndex];
  tempArray[secondIndex] = tempIndex;
  return tempArray.join('');
}
