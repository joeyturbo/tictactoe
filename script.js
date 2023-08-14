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

const checkWinner = (player) => {
  switch (true) {
    case  box1.classList.contains(player) && 
          box2.classList.contains(player) && 
          box3.classList.contains(player):
            console.log(`${player} won`);
            break;
    case  box4.classList.contains(player) && 
          box5.classList.contains(player) && 
          box6.classList.contains(player):
            console.log(`${player} won`);
            break;
    case  box7.classList.contains(player) && 
          box8.classList.contains(player) && 
          box9.classList.contains(player):
            console.log(`${player} won`);
            break;
    case  box1.classList.contains(player) && 
          box4.classList.contains(player) && 
          box7.classList.contains(player):
            console.log(`${player} won`);
            break;
    case  box2.classList.contains(player) && 
          box5.classList.contains(player) && 
          box8.classList.contains(player):
            console.log(`${player} won`);
            break;
    case  box3.classList.contains(player) && 
          box6.classList.contains(player) && 
          box9.classList.contains(player):
            console.log(`${player} won`);
            break;    
    case  box1.classList.contains(player) && 
          box5.classList.contains(player) && 
          box9.classList.contains(player):
            console.log(`${player} won`);
            break;    
    case  box3.classList.contains(player) && 
          box5.classList.contains(player) && 
          box7.classList.contains(player):
            console.log(`${player} won`);
            break;
  }
}

const gameOver = () => {
  const h1 = document.createElement('h1');
  h1.innerHTML = 'STALEMATE'
  const overBlock = document.querySelector('.game-over');
  overBlock.appendChild(h1);
}


const stalemate = () => {
  let stalemateCheck = [
    box1.classList.contains('done'),
    box2.classList.contains('done'),
    box3.classList.contains('done'),
    box4.classList.contains('done'),
    box5.classList.contains('done'),
    box6.classList.contains('done'),
    box7.classList.contains('done'),
    box8.classList.contains('done'),
    box9.classList.contains('done'),
  ]
  if (stalemateCheck.includes(false)) {
    const gameOver = true;
    return gameOver;

  } else {
    const gameOver = false;
    return gameOver;
  }
}

const botMoveCheck = (botChoice) => {
  const check = botChoice.classList.contains('done');
  if (!check) {
    setTimeout(() => {
      botChoice.innerHTML = 'O';
      botChoice.classList.add('done');
      botChoice.classList.add('bot');
      checkWinner('bot')
    }, 1000)
    
  } else {
    botMove();
  }
  }

const botMove = () => {
  if (stalemate()) {
    const botChoice = document.getElementById(`box-${Math.floor(Math.random() * 9) + 1}`);
    botMoveCheck(botChoice);
  } else {
    gameOver();
  }


}

const move = (e) => {
  if (stalemate()) {
    const square = document.getElementById(e.target.id);
    square.classList.add('done');
    square.classList.add('human');
    square.innerHTML = 'X';
    checkWinner('human')
    botMove();
  } else {
    gameOver();
  }


}


grid.addEventListener('click', move)




