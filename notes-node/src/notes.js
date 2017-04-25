const fs = require('fs');

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = { title, body, created_at: Date.now(), updated_at: undefined };
    
    var duplicateNotes = notes.filter((note) => note.title === title);
    
    if (duplicateNotes.length == 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var removeNote = (title) => {
    var notes = fetchNotes();
    var filtered = notes.filter((n) => n.title != title);
    saveNotes(filtered);
    return notes.length != filtered.length;
};

var getAll = () => {
    return fetchNotes();  
};

var getNote = (title) => {
    var notes = fetchNotes();
    return notes.filter((n) => n.title === title)[0]
};

var logNote = (note) => {
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};

// Others

var fetchNotes = () => {
    try {
        var notesStr = fs.readFileSync('notes-data.json');
        return JSON.parse(notesStr);
    } catch (e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

module.exports = {
    addNote,
    removeNote,
    getAll,
    getNote,
    logNote
}