let screen = document.querySelector(".screen");
// ---QuerySelector: Navigate to an HTML tag by the class name and target its element

const uploadToScreen = (number) => {
  screen.append(number);
};// ----------Once Clicked/Initialized ...i want the num_key to show its value to the screen

const clearScreen = () => {
  screen.innerHTML = "";
};
// -------- Clears Screen



//function uploadToScreen()
//{

//}