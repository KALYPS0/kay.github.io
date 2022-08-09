// Want something
const welcome_text = document.querySelector("#welcome");
welcome_text.addEventListener("mouseover", hoverOverWelcome);
welcome_text.addEventListener("mouseout", hoverEnd);

function hoverOverWelcome(event) {
  console.log("Hovering over the welcome text.\n");
  welcome_text.setAttribute("style", "color: red");
}

function hoverEnd(event) {
  console.log("Not hovering anymore.\n");
  welcome_text.setAttribute("style", "color: black");
}
