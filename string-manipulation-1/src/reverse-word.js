/* exported reverseWord */

function reverseWord(word) {
  var reversed = '';
  for (var i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }
  return reversed;
}
