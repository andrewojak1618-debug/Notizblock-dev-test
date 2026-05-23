let notesTitles = ['BA', 'Aufgabe'];

let notes = ['banana', 'rasenmähen'];

let trashNotesTitles = [];
let trashNotes = [];

function renderNotes() {
  let contentRef = document.getElementById('content');
  contentRef.innerHTML = '';

  for (let indexNote = 0; indexNote < notes.length; indexNote++) {
    contentRef.innerHTML += getNoteTemplate(indexNote);
  }
}

function renderTrashNotes() {
  let trashContentRef = document.getElementById('trash_content');
  trashContentRef.innerHTML = '';

  for (
    let indexTrashNote = 0;
    indexTrashNote < trashNotes.length;
    indexTrashNote++
  ) {
    trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
  }
}

function getNoteTemplate(indexNote) {
  return `<p>+ title: ${notesTitles[indexNote]} -> ${notes[indexNote]}<button onclick="notetoTrash(${indexNote})">x</button></p>`;
}

function getTrashNoteTemplate(indexTrashNote) {
  return `<p>+ title: ${trashNotesTitles[indexTrashNote]} -> ${trashNotes[indexTrashNote]}<button onclick="deleteNote(${indexTrashNote})">x</button></p>`;
}

function addNote() {
  let noteInputRef = document.getElementById('note_input');
  let noteInput = noteInputRef.value;

  notes.push(noteInput);

  renderNotes();

  noteInputRef.value = '';
}

function notetoTrash(indexNote) {
  let trashNote = notes.splice(indexNote, 1);
  trashNotes.push(trashNote[0]);
  let trashNoteTitle = notesTitles.splice(indexNote, 1);
  trashNotesTitles.push(trashNoteTitle[0]);

  renderNotes();
  renderTrashNotes();
}

function deleteNote(indexTrashNote) {
  trashNotes.splice(indexTrashNote, 1);
  trashNotesTitles.splice(indexTrashNote, 1);

  renderNotes();
  renderTrashNotes();
}

// ich muss definieren, wie eine Notiz aussieht (Titel, Inhalt, Erstellungsdatum, evtl. Tags)
// wann werden sie angezeigt? (z.B. alle Notizen, nur die aktuellen, etc.)

// global speichern

// notizen löschen
// notizen archivieren
