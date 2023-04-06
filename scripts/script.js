// When the “Dark Theme” button is clicked,
// Background colors should change to darker colors (use 2 different colors for the left and right parts)
// Text colors on darker backgrounds should be updated to have good contrast
// Use toggling class properties to achieve the two previous changes
// Don't add css code in JS (don't use .style property)
// Text on the button should be updated to “Light Theme”.
// Pressing the “Light Theme” button would reverse all the changes. (3 points)

const themeButton = document.querySelector("#theme-button");
const buttonContainer = document.querySelector(".note-taking-area");
const pageAside = document.querySelector("aside");
const pageAsideHead = document.querySelector("aside h2");
const pageAsideItems = document.querySelectorAll("#my-notes-list *");
const pageHeader = document.querySelector("#main-title");
const navAbout = document.querySelector("#nav-item-about");
const navDocs = document.querySelector("#nav-item-docs");
const footerHead = document.querySelector("#footer-title");

function changeTheme(event) {
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

    for (let i = 0; i < pageAsideItems.length; i++)
      pageAsideItems[i].classList.toggle("darkText");
    footerHead.classList.toggle("darkText");
  }
}

buttonContainer.addEventListener("click", changeTheme);
