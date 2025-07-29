const noteInput = document.getElementById("noteInput");
const saveNoteBtn = document.getElementById("saveNote");
const notesContainer = document.getElementById("notesContainer");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

function renderNotes() {
  notesContainer.innerHTML = "";

  notes.forEach((note, index) => {
    const noteCard = document.createElement("div");
    noteCard.className = "note-card";

    noteCard.innerHTML = `
      <div class="note-text">${note}</div>
      <div class="note-actions">
        <button onclick="deleteNote(${index})">🗑️</button>
      </div>
    `;

    notesContainer.appendChild(noteCard);
  });
}

function saveNote() {
  const noteText = noteInput.value.trim();
  if (noteText === "") return;

  notes.push(noteText);
  localStorage.setItem("notes", JSON.stringify(notes));
  noteInput.value = "";
  renderNotes();
}

function deleteNote(index) {
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  renderNotes();
}

saveNoteBtn.addEventListener("click", saveNote);

noteInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    saveNote();
  }
});


renderNotes();
