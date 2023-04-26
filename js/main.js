const gameInitial = document.querySelector('.game-initial');
const btn = document.querySelector('#btn');


const HitAbertura = new Audio();
HitAbertura.src = 'audios/abertura.wav'

const HitMoeda = new Audio();
HitMoeda.src = 'audios/moeda.wav'


const novoJogo = () => {
  HitAbertura.play();
  const welcome = document.querySelector('.welcome');

  welcome.src = './img/welcome.gif';
  welcome.style.display = 'block'


  HitMoeda.play();

};

const container = document.getElementById('container');
const btn1 = document.getElementById('btn1');



btn1.addEventListener("click", function() {
  const buttonIniciar = document.createElement("h1");
  buttonIniciar.innerText = "Iniciar";
  buttonIniciar.style.padding = "20px";
  buttonIniciar.style.cursor = "pointer";
  buttonIniciar.style.background = "linear-gradient(#87CEEB, #E0F6FF)";
  container.appendChild(buttonIniciar);

  buttonIniciar.addEventListener("click", function() {
    window.location.href = "index.html";
  });
});
