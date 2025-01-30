'use strict';
const books = [
  {
    isbn: '978-3-16-148410-0',
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
  },
  {
    isbn: '978-1-59327-584-6',
    title: 'Eloquent JavaScript',
    author: 'Marijn Haverbeke',
  },
  {
    isbn: '978-0-13-235088-4',
    title: 'Clean Code',
    author: 'Robert C. Martin',
  },
];
console.log('Books Array:', books);
console.log('Type of books:', typeof books);
const booksJSON = JSON.stringify(books);
console.log('Books JSON String:', booksJSON);
console.log('Type of booksJSON:', typeof booksJSON);
const studentJSON = '{"id": 12345, "name": "John Doe"}';
console.log('Student JSON String:', studentJSON);
console.log('Type of studentJSON:', typeof studentJSON);
const student = JSON.parse(studentJSON);
console.log('Deserialized Student Object:', student);
console.log('Type of student:', typeof student);
