const lsystem = document.querySelector("#lsystem");
const complexNums = document.querySelector("#complexnumbers");
const tree = document.querySelector("#ptree");

lsystem.addEventListener("click", handleLClick);
function handleLClick(event) {
  console.log("L-System Photo Clicked.\n");
}

complexNums.addEventListener("click", handleCClick);
function handleCClick(event) {
  console.log("Complex Numbers Photo Clicked.\n");
}

tree.addEventListener("click", handleTClick);
function handleTClick(event) {
  console.log("Tree Photo Clicked.\n");
}
