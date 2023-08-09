// Elementi del DOM
let boxCounter = document.getElementById("boxCounter");

// Creazione del bottone "minus"
let minus = document.createElement("button");
minus.innerText = "-";
boxCounter.appendChild(minus);

// Creazione dello span "counter"
let counter = document.createElement("span");
counter.innerText = 0;
boxCounter.appendChild(counter);

// Creazione del bottone "plus"
let plus = document.createElement("button");
plus.innerText = "+";
boxCounter.appendChild(plus);

let reset = document.getElementById("reset");

// Creazione del bottone "reset"
let resbtn = document.createElement("button");
resbtn.innerText = "reset";
reset.appendChild(resbtn);

// Funzioni
function decrement() {
  counter.innerText--;
}

function increment() {
  counter.innerText++;
}

function res() {
  counter.innerText = 0;
}

// Associazione degli event listener
minus.onclick = decrement;
plus.onclick = increment;
resbtn.onclick = res;
