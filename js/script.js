const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const tartu = document.querySelector('.tartu');

const somHit = new Audio();
somHit.src = 'audios/player_down.wav'

const jumpHit = new Audio();
jumpHit.src = 'audios/jumpHit.wav'

const temaMario = new Audio();
temaMario.src = 'audios/temaMario.wav'


const jump = () => {
  mario.classList.add('jump');
  jumpHit.play();


  setTimeout(() => {
    mario.classList.remove('jump');
  },500);
}

const lopp = setInterval(() => {
temaMario.play();

const pipePosition = pipe.offsetLeft;
const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');


if (pipePosition <= 37 && pipePosition > 0 && marioPosition < 80){

  pipe.style.animation = 'none';
  pipe.style.left = `${pipePosition}px`;

  mario.style.animation = 'none';
  mario.style.bottom = `${marioPosition}px`;

  mario.src = './img/game-over.png';
  mario.style.marginLeft= '45px';
  mario.style.width = '75px';
  temaMario.pause();
  somHit.play();


  clearInterval(lopp);
}
}, 10);

document.addEventListener('keydown', jump);
