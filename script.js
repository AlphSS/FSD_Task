// Get required HTML elements
const noteInput = document.getElementById("noteInput");
const addNoteBtn = document.getElementById("addNoteBtn");
const notesContainer = document.getElementById("notesContainer");
const noteCount = document.getElementById("noteCount");

function updateNoteCount() {
  const totalNotes = notesContainer.children.length;
  noteCount.textContent = totalNotes;
}

function addNote() {
  const noteText = noteInput.value.trim();

  if (noteText === "") {
    alert("Please enter a note.");
    return;
  }

  const note = document.createElement("div");
  note.classList.add("note");

  const text = document.createElement("p");
  text.classList.add("note-text");
  text.textContent = noteText;

  const actions = document.createElement("div");
  actions.classList.add("note-actions");

  // Create Edit button
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("edit-btn");

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  const importantBtn = document.createElement("button");
  importantBtn.textContent = "Mark Important";
  importantBtn.classList.add("important-btn");

  editBtn.addEventListener("click", function () {
    const newText = prompt("Edit your note:", text.textContent);

    if (newText !== null && newText.trim() !== "") {
      text.textContent = newText.trim();
    }
  });

  deleteBtn.addEventListener("click", function () {
    note.remove();

    updateNoteCount();
  });

  importantBtn.addEventListener("click", function () {
    note.classList.toggle("important");

    if (note.classList.contains("important")) {
      importantBtn.textContent = "Unmark Important";
    } else {
      importantBtn.textContent = "Mark Important";
    }
  });

  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);
  actions.appendChild(importantBtn);

  note.appendChild(text);
  note.appendChild(actions);

  notesContainer.appendChild(note);

  noteInput.value = "";

  updateNoteCount();
}

addNoteBtn.addEventListener("click", addNote);

noteInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addNote();
  }
});
