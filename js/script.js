const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
  mario.classList.add('jump');

  setTimeout(() => {
    mario.classList.remove('jump');
  },500);
}

const lopp = setInterval(() => {

const pipePosition = pipe.offsetLeft;
const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

if (pipePosition <= 37 && pipePosition > 0 && marioPosition < 80){

  pipe.style.animation = 'none';
  pipe.style.left = `${pipePosition}px`;

  mario.style.animation = 'none';
  mario.style.bottom = `${marioPosition}px`;
}
}, 10);

document.addEventListener('keydown', jump);
