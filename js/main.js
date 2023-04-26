const gameInitial = document.querySelector('.game-initial');
const btn = document.querySelector('#btn');


const HitAbertura = new Audio();
HitAbertura.src = 'audios/abertura.wav'




HitAbertura.play();



const HitMoeda = new Audio();
HitMoeda.src = 'audios/moeda.wav'


const novoJogo = () => {

  const welcome = document.querySelector('.welcome');

  welcome.src = './img/welcome.gif';
  welcome.style.display = 'block'

};
