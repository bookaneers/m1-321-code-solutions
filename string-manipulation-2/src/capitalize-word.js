/* exported capitalizeWord */

function capitalizeWord(word) {
  word = word.toLowerCase();
  if (word === 'javascript') return 'JavaScript';
  return word.charAt(0).toUpperCase() + word.slice(1);
}
