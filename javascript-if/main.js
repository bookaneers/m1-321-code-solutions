/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

// isUnderFive(number)
function isUnderFive(number) {
  return (number < 5);
}

// isEven(number)
function isEven(number) {
  return (number % 2 === 1);
}

// startsWithJ(string)
function startsWithJ(string) {
  return (string.charAt(0) === 'J');
}

// isOldEnoughToDrink(person)
function isOldEnoughToDrink(person) {
  return (person.age >= 21);
}

// isOldEnoughToDrive(person)
function isOldEnoughToDrive(person) {
  return (person.age >= 16);
}

// isOldEnoughToDrinkAndDrive(person)
function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

// categorizeAcidity(pH)
function categorizeAcidity(pH) {
  if (pH === 7) return 'neutral';
  if (pH >= 0 && pH < 7) return 'acid';
  if (pH > 7 && pH <= 14) return 'base';
  return 'invalid pH level';
}

// introduceWarnerBro(name)
function introduceWarnerBro(name) {
  if (name === 'yakko' || name === 'wakko') return 'We\'re the warner brothers!';
  if (name === 'dot') return 'I\'m cute~';
  return 'Goodnight everybody!';
}
