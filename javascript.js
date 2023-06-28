console.log('loading')
const option = document.querySelectorAll('div.options button');
const result = document.querySelector('#resulttext');
const playerScore = document.querySelector('#playerscore');
const computerScore = document.querySelector('#computerscore');
const reset = document.querySelector('#reset');

reset.addEventListener('click',() => location.reload());

option.forEach(button => { button.addEventListener('click', getPlayerOption) });

let computerOptions = [{option: 'Rock', value: 0}, {option: 'Paper', value: 1}, {option: 'Scissors', value: 2}];
let pScore = 0;
let cScore = 0;
let playerOption;

function computerPlay() {
    let result = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    return result;
  }

function game(playerSelect, computerSelect) {

    if (Number(playerSelect) === computerSelect.value) {
        playerScore.textContent = ++pScore;
        computerScore.textContent = ++cScore;
        result.textContent = "Tie!";
       }
    else if (Number(playerSelect) > computerSelect.value) {
        playerScore.textContent = ++pScore;
        result.textContent = `You win! ${playerOption} beats ${computerSelect.option}`;
       }
    else {
        computerScore.textContent = ++cScore;
        result.textContent = `You lose! ${computerSelect.option} beats ${playerOption}`;
       }
  check();
 }

function check() {
    if (cScore === 5 || pScore === 5) {
      if (cScore === pScore){
        result.textContent = "Tie";
        }
      if (pScore > cScore) {
            result.textContent = "You win the game";
        }
      if (cScore > pScore) {
            result.textContent = "You lose the game";
        }
    option.forEach(button => {
              button.removeEventListener('click', getPlayerOption);
            });

         }
  }

      
function getPlayerOption(e) {
  console.log('click inside');
  let playerSelect= (e.target.id);
  playerOption = e.target.textContent;
  game(playerSelect, computerPlay());
  }
  