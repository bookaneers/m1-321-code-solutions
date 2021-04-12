/* exported oddOrEven */

function oddOrEven(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 1) {
      newArray.push('odd');
    } else {
      newArray.push('even');
    }
  }
  return newArray;
}
