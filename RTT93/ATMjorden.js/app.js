let ballerBalance = 1500;
//-----------------{selctors}
let btnOne = document.querySelector("#a1");
let btnTwo = document.querySelector("#a2");
let btnThree = document.querySelector("#a3");
let btnFour = document.querySelector("#a4");
let btnFive = document.querySelector("#a5");
let btnSix = document.querySelector("#a6");
// ------------------------------------
let optiona = document.querySelector("#selectora");
let optionb = document.querySelector("#selectorb");
let optionc = document.querySelector("#selectorc");
let optiond = document.querySelector("#selectord");
let optione = document.querySelector("#selectore");
let optionf = document.querySelector("#selectorf");
// -----------------------------{screen-setting}
let miniscreen = document.querySelector(".displayScreen");
let answerscreen = document.createElement("div");
answerscreen.setAttribute("class", "nput");
let useraccount;
let accountBalance;
const initProcess = () => {
  startDisplay();
  displayMainMenu();
};
const startDisplay = () => {
  let pinNum = prompt("Please Enter Pin");
  let pinConfirm = prompt("Please ReEnter Pin");
  if (pinNum === pinConfirm) {
    alert("PIN CONFIRMED");
    alert(" Welcome User!", useraccount);
    alert(" Please Select One Of the Following Options");
  } else {
    alert("Invalid PIN.. we assume you are a criminal");
    alert("POLICE ARE ON THE WAY..");
    let po_po = document.createElement("img");
    po_po.setAttribute(
      "src",
      "https://media1.giphy.com/media/L0ZDZMbxzBa6Wnroid/giphy.gif?cid=6c09b952876evqxzyk4p1r6wg4ndo4b9sd5o464wjyt1rbxo&rid=giphy.gif&ct=s"
    );
    po_po.setAttribute("class", "fed");
    miniscreen.replaceWith(po_po);
    let body = document.querySelector("body");
    body.style.backgroundColor = "red";
  }
};
const displayMainMenu = () => {
  optiona.innerHTML = "Check BAL";
  optionb.innerHTML = "Transfer";
  optionc.innerHTML = "Withdrawl";
  optiond.innerHTML = "Deposit";
  optione.innerHTML = "Settings";
  optionf.innerHTML = "Cancel";
};
// const displayIncrements = () => {
//     optiona.innerHTML = "100";
//     optionb.innerHTML = "200";
//     optionc.innerHTML = "300";
//     optiond.innerHTML = "400";
//     optione.innerHTML = "Custom Amnt";
//     optionf.innerHTML = " All OF IT";
//   };
const selectionAnswer = (text) => {
  answerscreen.innerHTML = text;
  miniscreen.replaceWith(answerscreen);
};
const check_balance = () => {
  selectionAnswer(`Current Balance: ${ballerBalance}  USD`);
};

const deposit = () => {
    
  let cash = prompt(" Enter Amount you would like to deposit.");
  selectionAnswer(
    `Current Balance: ${parseInt(ballerBalance) + parseInt(cash)} USD`
  );
};
const withdraw = () => {
    
  let cash = prompt(" Enter Amount you would like to withdraw.");
  selectionAnswer(
    `Current Balance: ${parseInt(ballerBalance) - parseInt(cash)} USD`
  );
};
const shehroze = () => {
    let body = document.querySelector('body')
    // create a div 
        let firstDiv = document.createElement('div')
            firstDiv.setAttribute("class", "hu")
            firstDiv.innerHTML = "HU"
    // create a div inside the existing div
        let secondDiv = document.createElement('div')
            secondDiv.setAttribute("class","doug")
            secondDiv.innerHTML = "DOUG"
        firstDiv.append(secondDiv)
        body.append(firstDiv)
}
