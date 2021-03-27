// student
var student = {
  firstName: 'Fernando',
  lastName: 'Figueiredo',
  age: 51
};
var fullName = student.firstName + ' ' + student.lastName;
console.log('Value of fullName: ', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'Business Consultant';
console.log('Value of student.livesInIrvine: ', student.livesInIrvine);
console.log('Value of student.previousOccupation: ', student.previousOccupation);
console.log('Value of student: ', student);

// vehicle
var vehicle = {
  make: 'GM',
  model: 'Silverado',
  year: 2008
};
vehicle['color'] = 'blue';
vehicle['isConvertible'] = false;
console.log('Value of vehicle.color: ', vehicle['color']);
console.log('Value of vehicle.isConvertible: ', vehicle['isConvertible']);
console.log('Value of vehicle: ', vehicle);

// pet
var pet = {
  name: 'Delia',
  type: 'cat'
};
delete pet.name;
delete pet.type;
console.log('Value of pet: ', pet);
