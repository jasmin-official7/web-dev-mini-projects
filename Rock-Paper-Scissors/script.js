let score=JSON.parse(localStorage.getItem('score')) || {
    wins:0,
    loses:0,
    ties:0
  }; 
  updateScore();

function playGame(playerMove){ //WHAT USER CHOOSES
  
  const compMove = pickComputerMove(); 
  let result='';
  
  if(playerMove==='Scissors'){
    if(compMove==='Rock'){
      result='You Lose.';
    }else if(compMove==='Paper'){
      result='You Win.';
    }else{
      result='Tie.';
    } 
  }else if(playerMove==='Paper'){
    if(compMove==='Rock'){
    result='You Win.';
    }else if(compMove==='Paper'){
      result='Tie.';
    }else{
      result='You Lose.';
    }
  }else{
    if(compMove==='Rock'){
    result='Tie.';
    }else if(compMove==='Paper'){
      result='You Lose.';
    }else{
      result='You Win.';
    }
  }

  if(result==='You Win.'){
    score.wins+=1 ; 
  }else if(result==='You Lose.'){
    score.loses+=1;
  }else if(result==='Tie.'){
    score.ties+=1;
  }


  localStorage.setItem('score',JSON.stringify(score));

  updateScore();
  document.querySelector('.js-result').innerHTML= result;
  document.querySelector('.js-moves').innerHTML=`You
  <img src="images/${playerMove}-emoji.png" class="move-icon">
  <img src="images/${compMove}-emoji.png" class="move-icon">
  Computer`;
}

function updateScore(){
  document.querySelector('.js-score').innerHTML=` Wins: ${score.wins} , Loses: ${score.loses} , Ties: ${score.ties}`;
}

function pickComputerMove(){ //WHAT COMPUTER CHOOSES
  
  let compMove= ''; 
  const randomNum = Math.random();  
  
  if(randomNum >= 0 && randomNum < 1/3){
    compMove= 'Rock';
  }else if(randomNum >= 1/3 && randomNum < 2/3){
    compMove= 'Paper';
  }else{ 
    compMove= 'Scissors'; 
  }
  
  return compMove;  
}