let notes = ['1 Notiz', '2 Notiz', '3 Notiz'];

let trashNotes = [];

function renderNotes() {
  let contentRef = document.getElementById('content');
  contentRef.innerHTML = '';

  for (let indexNote = 0; indexNote < notes.length; indexNote++) {
    const note = notes[indexNote];
    contentRef.innerHTML += getNoteTemplate(indexNote);
  }
}

function renderTrashNotes() {
  let TrashContentRef = document.getElementById('trash_content');
  TrashContentRef.innerHTML = '';

  for (
    let indexTrashNote = 0;
    indexTrashNote < trashNotes.length;
    indexTrashNote++
  ) {
    const note = notes[indexTrashNote];
    TrashContentRef.innerHTML += getNoteTemplate(indexTrashNote);
  }
}

function getNoteTemplate(indexNote) {
  return `<p>+ ${notes[indexNote]}<button onclick="deleteNote(${indexNote})">x</button></p>`;
}

function getTrashNoteTemplate(indexNote) {
  return `<p>+ ${trashNotes[indexTrashNote]}<button onclick="deleteNote(${indexTrashNote})">x</button></p>`;
}

function addNote() {
  let noteInputRef = document.getElementById('note_input');
  let noteInput = noteInputRef.value;

  notes.push(noteInput);

  renderNotes();

  noteInputRef.value = '';
}

function deleteNote(indexNote) {
  let trashNote = notes.splice(indexNote, 1);
  trashNotes.push(trashNote);
  renderNotes();
  renderTrashNotes();
}

// ich muss definieren, wie eine Notiz aussieht (Titel, Inhalt, Erstellungsdatum, evtl. Tags)
// wann werden sie angezeigt? (z.B. alle Notizen, nur die aktuellen, etc.)

// global speichern

// notizen löschen
// notizen archivieren
