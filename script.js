const grid = document.querySelector('.container');
const box1 = document.getElementById('box-1');
const box2 = document.getElementById('box-2');
const box3 = document.getElementById('box-3');
const box4 = document.getElementById('box-4');
const box5 = document.getElementById('box-5');
const box6 = document.getElementById('box-6');
const box7 = document.getElementById('box-7');
const box8 = document.getElementById('box-8');
const box9 = document.getElementById('box-9');


const botMoveCheck = (botChoice) => {
  const check = botChoice.classList.contains('done');
  if (!check) {
    setTimeout(() => {
      botChoice.innerHTML = 'O';
      botChoice.classList.add('done');
    }, 1000)
    
  } else {
    botMove();
  }
  }

const botMove = () => {
  const botChoice = document.getElementById(`box-${Math.floor(Math.random() * 9) + 1}`)
  botMoveCheck(botChoice);
}

const move = (e) => {
  const square = document.getElementById(e.target.id);
  square.classList.add('done');
  square.innerHTML = 'X';
  botMove();
}


grid.addEventListener('click', move)




