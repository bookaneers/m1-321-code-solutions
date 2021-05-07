var arrayOfBooks = [
  {
    isbn: '9781593275846',
    title: 'Eloquent JavaScript: A Modern Introduction to Programming',
    author: 'Marijn Haverbeke'
  },
  {
    isbn: '9781118531648',
    title: 'JavaScript and JQuery: Interactive Front-End Web Development',
    author: 'Jon Duckett'

  },
  {
    isbn: '9781943872626',
    title: 'Murachs JavaScript and jQuery',
    author: 'Mary Delamater'

  }
];

console.log('arrayOfBooks: ', arrayOfBooks);
console.log('arrayOfBooks typeof: ', typeof arrayOfBooks);

var studentInfo = '{"numberId": "123456", "student":"Jon Smith"}';
console.log('studentInfo: ', studentInfo);
console.log('studentInfo typeof: ', typeof studentInfo);

var object = JSON.parse(studentInfo);
console.log('object: ', object);
console.log('object typeof: ', typeof object);
