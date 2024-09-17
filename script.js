let score =
    {
      ties: 0,
      wins: 0,
      losses: 0,
    }
    console.log(score)
    function computerPick()
    {
      let x=Math.random();
      if (x<1/3) return 'rock';
      if (x>=1/3 && x<2/3) return 'paper';
      if (x>=2/3) return 'scissors';
    }
    
    function makeMove(playerMove)
    {
      let computerMove=computerPick();
      let move=document.querySelector('.chosen-move');
      let result=document.querySelector('.result');

      if (computerMove===playerMove) 
        {
          result.innerHTML = 'Tie';
          move.innerHTML = `you choose 
          <img src="move-image/${playerMove}-emoji.png" class="move-image"> 
          computer choose <img src="move-image/${computerMove}-emoji.png" class="move-image">`;
          score.ties+=1;
        }
      else if 
      (
          (playerMove === 'rock' && computerMove === 'scissors') ||
          (playerMove === 'paper' && computerMove === 'rock') ||
          (playerMove === 'scissors' && computerMove === 'paper')
      )
        {
          result.innerHTML = 'Win';
          move.innerHTML = `you choose 
          <img src="move-image/${playerMove}-emoji.png" class="move-image"> 
          computer choose <img src="move-image/${computerMove}-emoji.png" class="move-image">`;
          score.wins += 1;

        } 
      else 
        {
          result.innerHTML = 'Lose';
          move.innerHTML = `you choose 
          <img src="move-image/${playerMove}-emoji.png" class="move-image"> 
          computer choose <img src="move-image/${computerMove}-emoji.png" class="move-image">`;
          score.losses += 1;
        }
    }
    function scoreUpdate()
    {
      const result=document.querySelector('.result-score');
      result.innerHTML = `Win: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
    }
    function reset()
    {
      score.losses=score.ties=score.wins=0;
      scoreUpdate();
      let clear = document.querySelector('.result');
      let clear2 = document.querySelector('.chosen-move');
      clear.innerText='';
      clear2.innerText='';
    }