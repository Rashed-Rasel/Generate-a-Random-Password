const passwrodBox = document.querySelector("#passwrod");
const lenght = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "~`!@#$%^&*()-_+={}[]|;:<>,./?";
const allchars = upperCase + lowerCase + number + symbol;

function createPassword() {
  let passwrod = "";
  passwrod += upperCase[Math.floor(Math.random() * upperCase.length)];
  passwrod += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  passwrod += number[Math.floor(Math.random() * number.length)];
  passwrod += symbol[Math.floor(Math.random() * symbol.length)];

  while (lenght > passwrod.length) {
    passwrod += allchars[Math.floor(Math.random() * allchars.length)];
  }
  passwrodBox.value = passwrod;
}

function copyPasswrod() {
  passwrodBox.select();
  document.execCommand("copy");
}
