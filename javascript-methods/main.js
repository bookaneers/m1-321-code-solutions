// Math Methods
var num1 = 100;
var num2 = 135;
var num3 = 225;
var maximumValue = Math.max(num1, num2, num3);
console.log('The value of maximumValue is ', maximumValue);
var heroes = ['Batman', 'Superman', 'Ironman', 'Zorro'];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('The value of randomIndex is ', randomIndex);
var randomHero = heroes[randomIndex];
console.log('The value of randomHero is ', randomHero);

// Array Methods
var library = [
  {
    title: 'Eloquent JavaScript',
    author: 'Marijn Haverbeke'
  },
  {
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford'
  },
  {
    title: 'Speaking JavaScript',
    author: 'Axel Rauschmayer'
  }];
var lastBook = library.pop();
console.log('The value of lastBook is ', lastBook);
var firstBook = library.shift();
console.log('The value of firstBook is ', firstBook);
var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('The value of Library: ', library);

// String Methods
var fullName = 'Fernando Figueiredo';
var firstAndLastName = fullName.split(' ');
console.log('The value of firstAndLastName: ', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('The value of sayMyName: ', sayMyName);
