/*var obj = {
    name: 'Jobs'
};

var stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);*/

// var personStr = '{"name": "Benoit", "age": 20}';
// var obj = JSON.parse(personStr);
// console.log(typeof obj);
// console.log(obj);

const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some body'
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);