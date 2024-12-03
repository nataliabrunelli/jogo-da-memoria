const emojis = [
  "🎶",
  "🎶",
  "🥁",
  "🥁",
  "🎷",
  "🎷",
  "🎺",
  "🎺",
  "🎸",
  "🎸",
  "🎻",
  "🎻",
  "🎹",
  "🎹",
  "🪕",
  "🪕",
];

let openCards = [];

// Função embaralhadora
let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

// Mostrando os elementos na tela
for (let i = 0; i < emojis.length; i++) {
  // criando a caixa
  let box = document.createElement("div");

  // colocando a classe item
  box.className = "item";

  // jogando o emoji pro html
  box.innerHTML = shuffleEmojis[i];

  // cria a função de click
  box.onclick = handleClick;

  // colocando essa caixa em algum lugar do html (deixando filha)
  document.querySelector(".game").appendChild(box);
}

function handleClick() {
  if (openCards.length < 2) {
    // adiciona uma classe ao elemento clicado
    this.classList.add("boxOpen");

    // joga o elemento clicado para o Array
    openCards.push(this);
  }

  // verifica se as cartas são iguais
  if (openCards.length == 2) {
    setTimeout(checkMatch, 500);
  }
}

function checkMatch() {
  if (openCards[0].innerHTML === openCards[1].innerHTML) {
    openCards[0].classList.add("boxMatch");
    openCards[1].classList.add("boxMatch");
  } else {
    openCards[0].classList.remove("boxOpen");
    openCards[1].classList.remove("boxOpen");
  }

  openCards = [];

  if (document.querySelectorAll(".boxMatch").length === emojis.length) {
    alert("PARABÉNS, você venceu!")
  }
}
