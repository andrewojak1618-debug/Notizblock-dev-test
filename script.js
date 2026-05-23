// notizen anzeigen lassen
// ich brauche Notizen
let notes = ["1 Notiz", "2 Notiz", "3 Notiz"];

function renderNotes() {
  let contentRef = document.getElementById("content");
  contentRef.innerHTML = "";

  for (let indexNote = 0; indexNote < notes.length; indexNote++) {
    const note = notes[indexNote];
    contentRef.innerHTML += getNoteTemplate(note);
  }
}

function getNoteTemplate(note) {
  return `<p>+ ${note}</p>`;
}

// ich muss definieren, wie eine Notiz aussieht (Titel, Inhalt, Erstellungsdatum, evtl. Tags)
// wann werden sie angezeigt? (z.B. alle Notizen, nur die aktuellen, etc.)

// global speichern
// notizen hinzufügen

// notizen löschen
// notizen archivieren
