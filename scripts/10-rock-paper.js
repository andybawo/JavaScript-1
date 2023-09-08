// const score = {    how we use objests to add score
      //   wins: 0,
      //   losses: 0,
      //   ties: 0
      // };
      let score = JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        losses: 0,
        ties: 0
      }; // this line of code shows how we use the local storage to display  exactly what is above it, so that when the page is refreshed the scores still remain, also using the Default operator ||, it shortens the code we have as it tells us if the left side is truthy i.e it has a score, we use the left side, if it is falsy we use the default score on the right.

      // if (score === null) { //<--- shortcut for this is if(!score)
      //   score = {
      //     wins: 0,
      //     losses: 0,
      //     ties: 0,
      //   }
      // }

      //09 lesson DOM


      updateScoreElement();



      // This immediate code below shows how we can use parmeter statement
      function playGame(playerMove) {
        const computerMove = pickComputerMove();

        let result = '';
      
        if (playerMove === 'scissors') {
          if (computerMove === 'scissors') {
          result = 'Tie';
          } else if (computerMove === 'rock') {
            result = 'You lose';
          } else if (computerMove === 'paper') {
            result = 'You win!';
          }

        } else if (playerMove === 'paper') {
          if (computerMove === 'paper'){
            result = 'Tie';
          } else if (computerMove === 'scissors') {
            result = 'You lose';
          } else if (computerMove === 'rock') {
            result = 'You win!';
          }
          
        } else if (playerMove === 'rock') {
          if (computerMove === 'rock') {
            result = 'Tie';
          } else if (computerMove === 'paper') {
            result = 'You lose';
          } else if (computerMove === 'scissors') {
            result = 'You win!';
          }
        }
        
        if (result === 'You win!') {
          score.wins = score.wins + 1;
        } else if (result === 'You lose') {
          score.losses += 1;
        } else if (result === 'Tie') {
          score.ties += 1;
        }

        localStorage.setItem('score', JSON.stringify(score));

        
        updateScoreElement();

        document.querySelector('.js-result').
        innerHTML = result;

        document.querySelector('.js-moves')
          .innerHTML = `You <img src="images/${playerMove}-emoji (1).png" class="move-icon"> <img src="images/${computerMove}-emoji.png" class="move-icon"> Computer`;

      }

      function updateScoreElement() {
        document.querySelector('.js-score')
          .innerHTML = `Wins ${score.wins}. Losses ${score.losses}. Ties ${score.ties}`;
      }


      // This immediate code below shows how we use functions to reduce the number of codes written, so what we did that's different from the original rock paper scissors project was that we put the similar code that was present in all the buttons into a function and we then called that function in the button.


      function pickComputerMove() {
        const randomNumber2 = Math.random();

        let computerMove = '';
        
        if (randomNumber2 >= 2/3 && randomNumber2 < 1) {
          computerMove = 'scissors';
        } else if (randomNumber2 >= 0 && randomNumber2 < 1/3) {
          computerMove = 'rock';
        } else if (randomNumber2 >= 1/3 && randomNumber2 < 2/3) {
          computerMove = 'paper'
        }

        return computerMove;
      }