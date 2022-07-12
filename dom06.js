console.log("Hello o6");
//Captura referencis do DOM
const eP = document.querySelector("p");
const eButton = document.querySelector("button");

function mudaTexto(){
    console.log("mudaText chamada!")
    eP.textContent = "Ok, funcionou!"
}

function ouvinteClick(event) {
    console.log("ouvinteClick disparou");
    mudaTexto();
}

eButton.addEventListener("click", ouvinteClick);