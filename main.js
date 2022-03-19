let displayScreen = document.getElementById("displayScreen");

function display(num) {
  displayScreen.value += num;
}
function Calculate() {
  try {
    displayScreen.value = eval(displayScreen.value);
  } catch (err) {
    alert("Invalid");
  }
}
function Clear() {
  displayScreen.value = "";
}
function del() {
  displayScreen.value = displayScreen.value.slice(0, -1);
}
