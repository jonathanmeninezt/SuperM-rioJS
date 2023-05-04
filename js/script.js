const gameBoard = document.querySelector('.game-board');
const container_return = document.querySelector('.container_return');
const jogar_novamente = document.querySelector('.jogar_novamente');
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const tartu = document.querySelector('.tartu');
const block = document.querySelector('.block');
const score = document.querySelector('#score');
const mato = document.querySelector('.mato');
const moon = document.querySelector('.moon');

let count = 0;

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

const animationSpeed = setInterval(() => {

  if(count === 1900) {

    pipe.style.animationDuration = '2s';
    block.style.animationDuration = '2s';
    mato.style.animationDuration = '2.8s';


  }else if(count === 3000){
    pipe.style.animationDuration = '1s';
    block.style.animationDuration = '1s';
    mato.style.animationDuration = '1.8s';


    clearInterval(animationSpeed);
  }
}, 10);

const trocaCenario = setInterval(() => {
  if(count === 1500){
    gameBoard.style.background = 'linear-gradient( #ff8c00, #E0F6FF)';

  }else if(count === 800) {
     gameBoard.style.background = 'linear-gradient( #170333, #111111)';
     gameBoard.style.borderBottom = '15px solid rgb(96, 118, 96)';
     moon.style.display = 'block';

    clearInterval(trocaCenario);
  }
}, 10);




const lopp = setInterval(() => {
  temaMario.play();

const pipePosition = pipe.offsetLeft;
const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');


if (pipePosition <= 37 && pipePosition > 0 && marioPosition < 80){
  temaMario.pause();

  somHit.play();
  mario.src = './img/game-over.png';
  mario.style.marginLeft= '41px';
  mario.style.width = '75px';
  mario.style.animation = 'gameover-animation 3s';
  mario.style.animation = 'none';
  mario.style.bottom = `${marioPosition}px`;

  pipe.style.animation = 'none';
  pipe.style.left = `${pipePosition}px`;


  fimJogo();

  jogar_novamente.style.display = 'block';


  clearInterval(lopp);

}
  count++;
  score.innerHTML = `SCORE: ${count}`;

}, 10);




const loppBlock = setInterval(() => {


const blockPosition = block.offsetLeft;
const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');


if (blockPosition <= 80 && blockPosition > 0 && marioPosition < 80){

  block.style.animation = 'none';
  block.style.left = `${blockPosition}px`;


  mario.style.animation = 'none';
  mario.style.bottom = `${marioPosition}px`;

  mario.src = './img/game-over.png';
  mario.style.marginLeft= '40px';
  mario.style.width = '75px';
  mario.style.animation = 'gameover-animation 3s';

  temaMario.pause();
  somHit.play();






  clearInterval(loppBlock);

}

count++;
score.innerHTML = `SCORE: ${count}`;
}, 10);

document.addEventListener('keydown', (e) => {
  if ((e.code === "ArrowUp") | (e.code === "Space")){
    jump();
  }
});

function fimJogo() {

  const textGameOver = document.createElement("h1");
  textGameOver.innerText = `GAME OVER!
  A sua pontuação é ${count}`;

  textGameOver.style.fontSize = "28px";
  textGameOver.style.textAlign = "center";
  textGameOver.style.marginTop = "100px";
  textGameOver.style.backgroundColor = "black";
  textGameOver.style.color = "#f3ff12";


  container_return.appendChild(textGameOver);

};


jogar_novamente.addEventListener('click', () => {
  location.reload();
});
