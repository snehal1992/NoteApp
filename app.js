const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

const argv = yargs.argv;
var command  = process.argv[2];

if(command == 'add') {
	var note = notes.addNote(argv.title, argv.body);
	if(note) {
		console.log('Note created');
		notes.logNote(note);
	} else {
		console.log('Duplicate note');
	}
} else if (command == 'list') {
	var allNotes = notes.getAll();
	console.log(`Print Notes: ${allNotes.length} notes(s).`);
	allNotes.forEach((note) => notes.logNote(note));
} else if (command == 'read') {
	var note = notes.getNote(argv.title);
	if(note){
		console.log('Note');
		notes.logNote(note);
	} else {
		console.log('No such note exists');
	}
} else if (command == 'remove') {
	var removeMessage = notes.removeNote(argv.title);
	var message = removeMessage ? 'Note was removed': 'Note not removed';
	console.log(message);
} else {
	console.log('command not recognized');
}