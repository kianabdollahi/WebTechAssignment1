// Declare an array (notesArray) in your JS code with JS note objects in this format: {title:"note one", body:"this is my first note"}.
// Make sure this variable is declared outside of any function. (1 point)
// When the user types something in the textarea and clicks the “save” button (4 points)
// Show a prompt to the user and ask for the title of the note they want to save
// Add a new JS object to the notesArray with the provided title and the text in the text area as the body
// Add a list item to the sidebar with the title of the JS object you just added to the array

const themeButton = document.querySelector("#theme-button");
const buttonContainer = document.querySelector(".note-taking-area");
const saveButton = document.querySelector("#save-button");
const cancelButton = document.querySelector("#cancel-button");
const newNoteButton = document.querySelector("#new-note-button");
const textArea = document.querySelector("#text-box");

const pageAside = document.querySelector("aside");
const pageAsideHead = document.querySelector("aside h2");
let pageAsideItems = document.querySelectorAll("#my-notes-list li");

const pageHeader = document.querySelector("#main-title");
const navAbout = document.querySelector("#nav-item-about");
const navDocs = document.querySelector("#nav-item-docs");
const footerHead = document.querySelector("#footer-title");

const notesList = document.querySelector("#my-notes-list");
const newLi = document.createElement("li");

function changeTheme(event) {
  let pageAsideItems = document.querySelectorAll("#my-notes-list li");

  if (event.target.id === "theme-button") {
    document.body.classList.toggle("darkBody");
    pageAside.classList.toggle("darkAside");
    pageAside.classList.toggle("darkText");
    pageHeader.classList.toggle("darkText");
    navAbout.classList.toggle("darkText");
    navDocs.classList.toggle("darkText");
    pageAsideHead.classList.toggle("darkText");
    if (themeButton.textContent === "Dark Theme") {
      themeButton.textContent = "Light Theme";
    } else {
      themeButton.textContent = "Dark Theme";
    }

    let pageAsideItems = document.querySelectorAll("#my-notes-list li");

    for (let i = 0; i < pageAsideItems.length; i++)
      pageAsideItems[i].classList.toggle("darkText");
    footerHead.classList.toggle("darkText");
  }
}

function hideButtons(event) {
  if (event.target.id === "cancel-button") {
    saveButton.style.display = "none";
    cancelButton.style.display = "none";
    textArea.style.display = "none";
  } else if (event.target.id === "new-note-button") {
    saveButton.style.display = "block";
    cancelButton.style.display = "block";
    textArea.style.display = "block";
  }
}

function clearText(event) {
  if (event.target.id === "new-note-button") {
    if (textArea.value.length != 0 && textArea.style.display === "block") {
      textArea.value = "";
    }
  }
}

let notesArray = [
  { title: "Note One", body: "This is note one" },
  { title: "Note Two", body: "This is note two" },
];

function saveNote(event) {
  let noteBody;
  let noteTitle;
  let newNote;

  if (event.target.id === "save-button") {
    if (textArea.value.length != 0) {
      noteTitle = prompt("Please enter note Title: ");
      noteBody = textArea.value;

      newNote = { title: `${noteTitle}`, body: `${noteBody}` };
      notesArray.push(newNote);

      const notesList = document.querySelector("#my-notes-list");
      const newLi = document.createElement("li");

      newLi.textContent = `${noteTitle}`;
      notesList.appendChild(newLi);
    }

    console.log(notesArray);
  }
}

function displayNote(event) {
  for (let i = 0; i < notesArray.length; i++) {
    if (notesArray[i]["title"] === event.target.innerText) {
      textArea.value = `${notesArray[i]["body"]}`;
    }
  }
}

buttonContainer.addEventListener("click", hideButtons);
buttonContainer.addEventListener("click", clearText);
buttonContainer.addEventListener("click", saveNote);
buttonContainer.addEventListener("click", changeTheme);
notesList.addEventListener("click", displayNote);
