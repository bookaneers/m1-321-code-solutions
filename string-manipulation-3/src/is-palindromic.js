/* exported isPalindromic */
function isPalindromic(string) {
  string = string.replaceAll(' ', '');
  while (string.length > 2) {
    if (string.charAt(0) !== string.charAt(string.length - 1)) return false;
    string = string.substring(1, string.length - 1);
  }
  return true;
}
