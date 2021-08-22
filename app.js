/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach winning points on GLOBAL score wins the game

*/


//pig Game 
var scors ,roundScore, activePlayer,gamePlaying,privious;
scors = [0,0];
roundScore = 0 ;
activePlayer = 0;
gamePlaying = true;
privious = 0;
var winningScore = prompt("enter winning score");
document.querySelector('.dice1').style.display = 'none';
document.querySelector('.dice2').style.display = 'none';
document.getElementById('score-0').textContent= '0';
document.getElementById('score-1').textContent= '0';
document.getElementById('current-0').textContent= '0';
document.getElementById('current-1').textContent= '0';


document.querySelector('.btn-roll').addEventListener('click',function(){
	if(gamePlaying ){
//random num
	var dice  = Math.floor((Math.random() * 6) + 1);
		console.log('dice '+dice);
		console.log('privious '+privious);
	//document.querySelector('#current-' + activePlayer).textContent = dice;
	//display 
	var diceDOM1 = document.querySelector('.dice'+(activePlayer+1));
	diceDOM1.style.display = 'block';
	diceDOM1.src = 'dice-' +dice +'.png';

		
	//document.querySelector('.dice2').style.display = 'block';
	//document.querySelector('.dice2').src = 'dice-' +privious +'.png';
		
		
		
		
		if (dice !== 1) {
			//Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //Next player
			//setTimeout(nextPlayer(),2000);
			//diceDOM1.src = 'dice-' +dice +'.png';
			
           setTimeout(()=>nextPlayer(),100);
        }
		
	}
});
//


document.querySelector('.btn-hold').addEventListener('click', function(){
		if(gamePlaying ){
			//add current to player score
			//var total = parseInt(document.getElementById('current-' + activePlayer).textContent);
			scors[activePlayer] += roundScore;
	        
			
			// UI
	document.getElementById('score-' +activePlayer).textContent = scors[activePlayer];
	
	
	//CHECK IF WON 	
	/* var readScore = parseInt(document.getElementById('score-'+activePlayer).textContent);
						
	if(readScore >= 100){
		setTimeout(function(){
			alert('Player ' +(activePlayer+1)+ ' won');
		
		},1);	
	}
		
  
		
	//setTimeout(function(){
		
	},1);
	 	

	*/									 
if(scors[activePlayer] >= winningScore){
	document.getElementById('name-'+activePlayer).textContent = 'winner!!!';
	document.querySelector('.dice1').style.display = 'none';
	document.querySelector('.dice2').style.display = 'none';
	document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
	document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
	gamePlaying = false;
	
}
	else{
	nextPlayer();
	}
		}
});

function nextPlayer(){
	activePlayer === 0 ? activePlayer = 1 : activePlayer =0;
	roundScore = 0;
	privious =0;
	document.getElementById('current-0').textContent='0';
	document.getElementById('current-1').textContent='0';
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');
	document.querySelector('.dice1').style.display = 'none';
	document.querySelector('.dice2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click',function(){
scors = [0,0];
roundScore = 0 ;
activePlayer = 0;
gamePlaying = true;

document.getElementById('score-0').textContent= '0';
document.getElementById('score-1').textContent= '0';
document.getElementById('current-0').textContent= '0';
document.getElementById('current-1').textContent= '0';
document.getElementById('name-0').textContent= 'Player 1';
document.getElementById('name-1').textContent= 'Player 2';
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.add('active');
	
//document.getElementById('name-'+activePlayer).textContent = 'Player '+activePlayer+1;

});