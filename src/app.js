/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/4geeks.ico";

window.onload = function carta() {
  //write your code here
  let suits = ["♦", "♥", "♠", "♣"];
  let selectedSuit = Math.floor(Math.random() * suits.length);
  if (selectedSuit == 0 || selectedSuit == 1) {
    document.querySelector("#simboloUno").style.color = "red";
    document.querySelector("#simboloDos").style.color = "red";
  }
  document.querySelector("#simboloUno").innerHTML = suits[selectedSuit];
  document.querySelector("#simboloDos").innerHTML = suits[selectedSuit];

  let cardNumber = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let selectedCard = Math.floor(Math.random() * cardNumber.length);
  document.querySelector("#contCarta").innerHTML = cardNumber[selectedCard];
};

function carta2() {
  let suits = ["♦", "♥", "♠", "♣"];
  let selectedSuit = Math.floor(Math.random() * suits.length);
  if (selectedSuit == 0 || selectedSuit == 1) {
    document.querySelector("#simboloUno").style.color = "red";
    document.querySelector("#simboloDos").style.color = "red";
  } else {
    document.querySelector("#simboloUno").style.color = "black";
    document.querySelector("#simboloDos").style.color = "black";
  }
  document.querySelector("#simboloUno").innerHTML = suits[selectedSuit];
  document.querySelector("#simboloDos").innerHTML = suits[selectedSuit];

  let cardNumber = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let selectedCard = Math.floor(Math.random() * cardNumber.length);
  document.querySelector("#contCarta").innerHTML = cardNumber[selectedCard];
}

document.querySelector("#boton").addEventListener("click", carta2);

setInterval(carta2, 10000);

function cambiandoTamanoCarta() {
  var ancho = document.querySelector("#Ancho").value;

  var alto = document.querySelector("#Alto").value;

  document.getElementById("fondoCarta").style.height = alto + "px";
  document.getElementById("fondoCarta").style.width = ancho + "px";
  console.log(ancho);
  console.log(alto);
}

document
  .querySelector("#botonCambioTamano")
  .addEventListener("click", cambiandoTamanoCarta);
