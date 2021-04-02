// function to convert minutes to seconds
function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
var resultOfconvertMinutesToSeconds = convertMinutesToSeconds(5);
console.log('Result of function convertMinutesToSeconds: ' + resultOfconvertMinutesToSeconds);

// function to greet a person
function greet(name) {
  return 'Hey, ' + name;
}
var resultOfGreet = greet('Beavis');
console.log('Result of function greet: ' + resultOfGreet);

// function to calculate the area of a rectangle
function getArea(width, height) {
  return width * height;
}
var resultOfGetArea = getArea(17, 42);
console.log('Result of function getArea: ' + resultOfGetArea);

// function to return person's first name
function getFirstName(person) {
  return person.firstName;
}
var resultofGetFirstName = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('Result of function getFirstName: ' + resultofGetFirstName);

// function to return the last item in an array
function getLastElement(array) {
  return array[array.length - 1];
}
var resultOfGetLastName = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('Result of function getLastElement: ' + resultOfGetLastName);
