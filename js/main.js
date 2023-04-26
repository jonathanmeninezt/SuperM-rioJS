const gameInitial = document.querySelector('.game-initial');

const HitAbertura = new Audio();
HitAbertura.src = 'audios/abertura.wav'



const loop = setInterval(() => {
  HitAbertura.play();

  clearInterval(lopp);


}, 10);
