const score ={
  Tie:0,
  'You Win':0,
  'You Lose':0
}
function playGame(playerMove){
const computerMove = selectComputerMove();
  let result='';
   
  if(playerMove==='Rock'){
    if(computerMove==='Rock'){
      result='Tie';
      score.Tie++;
    }
    else if(computerMove==='Paper'){
      result='You Lose';
      score["You Lose"]++;
    }
    else {
      result='You Win';
      score["You Win"]++;
    }
  }

  else if(playerMove==='Paper'){
    if(computerMove==='Rock'){
      result='You Win';
      score["You Win"]++;
    }
    else if(computerMove==='Paper'){
      result='Tie';
      score['Tie']++;
    }
    else {
      result='You Lose';
      score['You Lose']
    }
}

else{
    if(computerMove==='Rock'){
      result='You Lose';
      score['You Lose']++;
    }
    else if(computerMove==='Paper'){
      result='You Win';
      score['You Win']++;
    }
    else {
      result='Tie';
      score.Tie++;
    }
}
displayResult(playerMove,computerMove,result, score);
}


function selectComputerMove(){
  const randomnum= Math.random();
let computerMove ='';
if(randomnum>=0 && randomnum<1/3){
   computerMove='Rock';
}
  else if(randomnum>=1/3 && randomnum<2/3){
    computerMove='Paper';
  }
    else{
      computerMove='Scissor';
    }
return computerMove;
}
function reset_score(){
  score.Tie=0;
  score["You Lose"]=0;
  score["You Win"]=0;
}

function displayResult(playerMove,computerMove,result){
  alert (`You picked ${playerMove}. computer picked ${computerMove}  , ${result}.
Wins: ${score['You Win']}, Losses: ${score['You Lose']}, Ties:${score.Tie}
`)
}