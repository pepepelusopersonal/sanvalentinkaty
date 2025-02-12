let frases = [
  { text: "Di sí por favor"},
  { text: "Piénsalo de nuevo."},
  { text: "Vamos, atrévete a decir que sí."},
  { text: "No tengas miedo, será genial."},
  { text: "Confía en mí, será divertido."},
  { text: "No tengas dudas, te hará sonreír."},
  { text: "Te prometo que será inolvidable."},
  { text: "No dejes que el miedo te detenga."},
  { text: "Confía en el destino, nos está dando una señal."},
  { text: "No te arrepentirás."}
];

document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'F12') {
    e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key === 'I') {
    e.preventDefault();
  }
  if (e.ctrlKey && e.key === 'u') {
    e.preventDefault();
  }
});

let wrapper = document.getElementById('wrapper');
let noCount = 0;
let siButton = document.getElementById('si');
let noButton = document.getElementById('no');
let messageText = document.getElementById("message");

function obtenerMensajeAleatorio() {
  if (noCount >= frases.length) {
    frases = frases.sort(() => Math.random() - 0.5); // Mezcla aleatoriamente la lista cuando ya se mostraron todas
    noCount = 0;
  }
  return frases[noCount++];
}

noButton.addEventListener("click", function() {
  let mensajeActual = obtenerMensajeAleatorio();
    
  // Aumentar tamaño del botón "Sí"
  let currentSize = parseInt(window.getComputedStyle(siButton).fontSize);
  siButton.style.fontSize = `${currentSize + 5}px`;
  siButton.style.padding = "15px 25px";

  // Mostrar mensaje e imagen
  messageText.innerText = mensajeActual.text;
  console.log(noCount)
  if (noCount > 6) {
    noButton.style.display = "none";
  }
})

siButton.addEventListener("click", function () {
  wrapper.innerHTML = `
  <div class="envelope">
      <div class="envelope-inner">
          <div class="envelope-front">
              <div class="postage-stamp">
                  <svg fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"
                      xml:space="preserve">
                      <path d="M253.98,257.652c0-8.568,8.568-17.748,17.136-18.361"></path>
                  </svg>
              </div>
              <div class="address">
                  <p><span>Para:</span> <span>Katy</span></p>
                  <p><span>De:</span> <span>Pepe</span></p>
              </div>
          </div>
          <div class="envelope-back">
              <div class="top-fold"></div>
              <div class="letter">
                  <img src="./img/Love3.png" alt="love1" class="custom-image">
                  <p>Cuanto más tiempo estoy contigo... <span class="highlight">Más quiero conocerte❤️!</span>
                  </br>Válido para un vinito :3
                  </p>
                  <img src="./img/love4.png" alt="love2" class="custom-image2">
              </div>
          </div>
      </div>
  </div>
  `
})