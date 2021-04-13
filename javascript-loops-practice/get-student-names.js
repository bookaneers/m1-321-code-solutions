/* exported getStudentNames */

function getStudentNames(students) {
  var onlyNames = [];
  for (var i = 0; i < students.length; i++) {
    onlyNames.push(students[i].name);
  }
  return onlyNames;
}
