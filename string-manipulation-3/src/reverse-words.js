/* exported reverseWords */
function reverseWords(string) {
  var arrayOfWords = string.split(' ');
  var wordOfArray = '';
  var newArray = [];
  for (var i = 0; i < arrayOfWords.length; i++) {
    wordOfArray = arrayOfWords[i];
    newArray.push(wordOfArray.split('').reverse().join(''));
  }
  return newArray.join(' ');
}
