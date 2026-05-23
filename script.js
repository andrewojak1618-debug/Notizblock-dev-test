// notizen anzeigen lassen
// ich brauche Notizen
let notes = ['1 Notiz', '2 Notiz', '3 Notiz'];

function renderNotes() {
  let contentRef = document.getElementById('content');
  contentRef.innerHTML = '';

  for (let indexNote = 0; indexNote < notes.length; indexNote++) {
    const note = notes[indexNote];
    contentRef.innerHTML += getNoteTemplate(note);
  }
}

function getNoteTemplate(note) {
  return `<p>+ ${note}</p>`;
}

// notizen hinzufügen
function addNote() {
  let noteInputRef = document.getElementById('note_input');
  let noteInput = noteInputRef.value;

  notes.push(noteInput);

  renderNotes();

  noteInputRef.value = '';
}

// ich muss definieren, wie eine Notiz aussieht (Titel, Inhalt, Erstellungsdatum, evtl. Tags)
// wann werden sie angezeigt? (z.B. alle Notizen, nur die aktuellen, etc.)

// global speichern

// notizen löschen
// notizen archivieren
