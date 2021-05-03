/* exported titleCase */
function titleCase(string) {
  // create array of special words
  var specialWords = ['and', 'or', 'nor', 'but', 'the', 'a', 'an', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  // create array of words from the given string
  var array = string.split(' ');
  // create variables
  var word = '';
  var colonFlag = 0;
  var hyphenLocation = 0;
  // iterate over array of words
  for (var i = 0; i < array.length; i++) {
    // input array elements in a string variable
    word = array[i].toString();
    // EGDE CASES:
    if (word.charAt(word.length - 1) === ':') {
      word = word.substring(0, word.length - 1);
      colonFlag = 2;
    }
    if (word.toLowerCase() === 'javascript') {
      word = 'JavaScript';
      if (colonFlag === 2) {
        word = word + ':';
      }
    }
    if (word === 'api') {
      word = 'API';
    }
    if (word.includes('-')) {
      hyphenLocation = word.indexOf('-');
      word = word.substring(0, hyphenLocation + 1) +
      word[hyphenLocation + 1].toUpperCase() +
      word.substring(hyphenLocation + 2);
    }
    if (!specialWords.includes(word) || colonFlag > 0) {
      word = word[0].toUpperCase() + word.substring(1);
      colonFlag--;
    }
    // input string back to array element
    array[i] = word;

  }
  // return array of words
  return array.join(' ');
}
