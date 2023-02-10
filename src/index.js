import {createLandingPage} from "./firstpage.js";
import {createMenuPage} from "./recipes.js";
import {createContactPage} from "./contact.js";
import "./style.css";

const contentDiv = document.getElementById("content");
contentDiv.classList.add("center");

const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const contactButton = document.getElementById("contact");
const buttons = document.querySelectorAll("button");


createLandingPage();
buttons.forEach(button => {
  button.addEventListener("click", () => {
    while (contentDiv.firstChild) {
      contentDiv.removeChild(contentDiv.firstChild);
    }
  })
})
homeButton.addEventListener("click", createLandingPage);
menuButton.addEventListener("click", createMenuPage);
contactButton.addEventListener("click", createContactPage);



//createLandingPage();
//createMenuPage();
//createContactPage();

//alert("this works and changes main.js");

/* switch (button.id) {
  case "home":
    createLandingPage;
    break;
  case "menu":
    createMenuPage;
    break;
  case "contact":
    createContactPage;
    break;
} */