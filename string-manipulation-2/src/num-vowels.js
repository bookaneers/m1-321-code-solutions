/* exported numVowels */

function numVowels(string) {
  if (string === '') return 0;
  return string.match(/[aeiou]/gi).length;
}
