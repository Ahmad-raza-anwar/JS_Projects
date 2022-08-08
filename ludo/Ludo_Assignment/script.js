
//Setting up the game

var diceFaces = new Array("./one.png","./two.png","./three.png","./four.png","./five.png","./six.png",);
    // console.log(diceFaces);
var totalPlayers=4;
var gameEnd = false;

// var allcolor = ["p1Home", "p2Home", "p3Home", "p4Home"];
// var currPos = 0;
// var currcolor = "";
// function HaveHover() {
//  var count = 0;
// var toKill = "";
// for (var i = 0; i < allcolor.length; i++) {
//   for (var n = 1; n <= 4; n++) {
//     var firstPawn = document.getElementById(allcolor[i] + "goti" + n);
//   var secondPawn=document.getElementById(currpawn);
// if (firstPawn.style.top == secondPawn.style.top && firstPawn.style.left == secondPawn.style.left && currcolor != allcolor[i] && currPos+num < 44) {
//   count++;
// toKill = allcolor[i] + "pawn" + n;
//            return toKill;
//      }
//    }
//  }
//  return false;
// }
// console.log(HaveHover());

for(let i=1;i<totalPlayers+1;i++){
    document.getElementById('player-'+i).classList.remove('disabledDiv');
    document.getElementById("dice-p"+i).src='./dice.gif';
}

var dice_p1='#dice-p1',
    dice_p2='#dice-p2',
    dice_p3='#dice-p3',
    dice_p4='#dice-p4',
    randomNumber,
    dicePoints=[],
    newElement,
    p1_running=0,
    p2_running=0,
    p3_running=0,
    p4_running=0,
    pickedOrNot;


document.getElementById('player-1').addEventListener('click',rollDice);
 

//functions
function pickPiece(e) {
   
    const clicks = e.target;
    console.log(e.target);
    if (clicks.matches('.p1-piece')) {
		// red goti ki movement against dice number
        if (dicePoints[0]==6)
            {
            newElement = document.createElement('div');
            newElement.innerHTML+=`<div class='running-p1' ></div>`;
            
            document.getElementById('pos-12').appendChild( newElement);
            p1_running+=1;
            pickedOrNot=true;
            dicePoints.shift();
            
            clicks.style.visibility = 'hidden';
            console.log('new Goti of Player -1');
            console.log(document.getElementById('pos-12'));
            if (dicePoints[0]!=6) {
                document.getElementById('p1Home').removeEventListener('click',pickPiece);
            }
            // Track Event Listeners  
            if (p1_running!=0) {
                console.log('Bari Chalein');
                    // Track Event Listeners ON  
                document.querySelectorAll('.mytable')[0].addEventListener('click',rollForward);
                document.querySelectorAll('.mytable')[1].addEventListener('click',rollForward);
                document.querySelectorAll('.mytable')[2].addEventListener('click',rollForward);
                document.querySelectorAll('.mytable')[3].addEventListener('click',rollForward);
            }
        }
    }
    else if (clicks.matches('.p2-piece')) {
		// green goti ki movement against dice number
        if (dicePoints[0]==6)
            {
            newElement = document.createElement('div');
            newElement.innerHTML+=`<div class='running-p2' ></div>`;
            // startP2.appendChild( newElement);
            document.getElementById('pos-25').appendChild( newElement);
            p2_running+=1;
            pickedOrNot=true;
            dicePoints.shift();
            
            clicks.style.visibility = 'hidden';
            console.log('new Goti of Player -2');
            console.log(document.getElementById('pos-25'));
            if (dicePoints[0]!=6) {
                document.getElementById('p2Home').removeEventListener('click',pickPiece);
            }
            // Track Event Listeners  
            if (p2_running!=0) {
                console.log('Bari Chalein');
                    // Track Event Listeners ON  
                document.querySelectorAll('.mytable')[0].addEventListener('click',rollForward);
                document.querySelectorAll('.mytable')[1].addEventListener('click',rollForward);
                document.querySelectorAll('.mytable')[2].addEventListener('click',rollForward);
                document.querySelectorAll('.mytable')[3].addEventListener('click',rollForward);
            }
        } 
    }
    else if (clicks.matches('.p3-piece')) {
		// blue goti ki movement against dice number
        if (dicePoints[0]==6)
            {
            newElement = document.createElement('div');
            newElement.innerHTML+=`<div class='running-p3' ></div>`;
            // startP3.appendChild( newElement);
            document.getElementById('pos-51').appendChild( newElement);
            p3_running+=1;
            pickedOrNot=true;
            dicePoints.shift();
            // document.getElementById('p3Home').removeEventListener('click',pickPiece);
            clicks.style.visibility = 'hidden';
            console.log('new Goti of Player -3');
            console.log(document.getElementById('pos-51'));
            if (dicePoints[0]!=6) {
                document.getElementById('p3Home').removeEventListener('click',pickPiece);
            }
            // Track Event Listeners  
            if (p3_running!=0) {
                console.log('Bari Chalein');
                    // Track Event Listeners ON  
                document.querySelectorAll('.mytable')[0].addEventListener('click',rollForward);
                document.querySelectorAll('.mytable')[1].addEventListener('click',rollForward);
                document.querySelectorAll('.mytable')[2].addEventListener('click',rollForward);
                document.querySelectorAll('.mytable')[3].addEventListener('click',rollForward);
            }
        } 
    }
    else if (clicks.matches('.p4-piece')) {
		// yellow goti ki movement against dice number
        if (dicePoints[0]==6)
            {
            newElement = document.createElement('div');
            newElement.innerHTML+=`<div class='running-p4' ></div>`;
            // startP4.appendChild( newElement);
            document.getElementById('pos-38').appendChild( newElement);
            p4_running+=1;
            pickedOrNot=true;
            dicePoints.shift();
            
            clicks.style.visibility = 'hidden';
            console.log('new Goti of Player -4');
            console.log(document.getElementById('pos-38'));
            if (dicePoints[0]!=6) {
                document.getElementById('p4Home').removeEventListener('click',pickPiece);
            }
            // Track Event Listeners  
            if (p4_running!=0) {
                console.log('Bari Chalein');
                    // Track Event Listeners ON  
                document.querySelectorAll('.mytable')[0].addEventListener('click',rollForward);
                document.querySelectorAll('.mytable')[1].addEventListener('click',rollForward);
                document.querySelectorAll('.mytable')[2].addEventListener('click',rollForward);
                document.querySelectorAll('.mytable')[3].addEventListener('click',rollForward);
            }
        } 
    }
}

// function to select random number of dice

function randDiceRoll(){
    let result=Math.floor(Math.random()*diceFaces.length);
    // let result = 5;
    return result;
}
function randGif(){
    let gifResult=Math.ceil(Math.random()*2);
    return gifResult;
}
//ROLL FORWARDv 
function rollForward(e){
    const clicks=e.target;
    // console.log(clicks, "click running");
    
    if (clicks.matches('.running-p1')) {
        // console.log(clicks.offsetParent, "clicks offset");
        let prevId = clicks.offsetParent.id;
        prevId = String(prevId);
        // console.log(prevId, "prevId");
        
        let nextPos = parseInt(prevId.slice(-2),10);
        console.log("ma yahan hun ", nextPos);
        console.log('Before adding new pos in var: ',nextPos);
        for (let fwd_i = 0; fwd_i < dicePoints[0]; fwd_i++) {
            nextPos += 1;
        }
        if (nextPos<=68) {
            newElement=clicks.parentNode;
            console.log(newElement, "New Element");
            newElement.remove();
            console.log('\tElement Removed');
            document.getElementById('pos-'+nextPos).appendChild(newElement);
            console.log('After adding new pos in var: ',nextPos);
            console.log('Travelled ',dicePoints[0]);
            console.log(newElement);
            dicePoints.shift();
            if (nextPos==68) {
                console.log(p1_running, "before decriment");
                p1_running--;
                console.log(p1_running, "after decriment");
            }
        }
        if (dicePoints.length==0) {
               // Track Event Listeners OFF 
                
               console.log('Track Listeners - OFF');
               document.querySelectorAll('.mytable')[0].removeEventListener('click',rollForward);
               document.querySelectorAll('.mytable')[1].removeEventListener('click',rollForward);
               document.querySelectorAll('.mytable')[2].removeEventListener('click',rollForward);
               document.querySelectorAll('.mytable')[3].removeEventListener('click',rollForward);
            if (pickedOrNot==true) {
                console.log('new Goti was picked!');
                document.getElementById('p1Home').removeEventListener('click',pickPiece);
            }
            //Next Player turn
            console.log('Next Player ajaei ab');
            document.getElementById('player-2').addEventListener('click',rollDice);
             
        }

    }
    else if (clicks.matches('.running-p2')) {
        
        console.log(clicks.offsetParent, "clicks offset");
        let prevId=clicks.offsetParent.id;
        console.log('prevId' , prevId);
        prevId=String(prevId);
        console.log('prevId in string' , prevId);
        
        let nextPos=parseInt(prevId.slice(-2),10);
        console.log("ma yahan hun ", nextPos);
        console.log('Before adding new pos in var: ',nextPos);
        for (let fwd_i = 0; fwd_i < dicePoints[0]; fwd_i++) {
            nextPos+=1;
            if (nextPos==63) {
                nextPos=11;
            }
            else if (nextPos==24) {
                nextPos=69;
            }
        }
        if (nextPos<=74) {
            newElement = clicks.parentNode;
            newElement.remove();
            console.log('\tElement Removed');
            document.getElementById('pos-'+nextPos).appendChild( newElement);
            console.log('After adding new pos in var: ',nextPos);
            console.log('Travelled ',dicePoints[0]);
            console.log(newElement);
            dicePoints.shift();
            if (nextPos==74) {
                p2_running--;
            }
        }
        if (dicePoints.length==0) {
                  
               // Track Event Listeners OFF 
               console.log('Track Listeners - OFF');
               document.querySelectorAll('.mytable')[0].removeEventListener('click',rollForward);
               document.querySelectorAll('.mytable')[1].removeEventListener('click',rollForward);
               document.querySelectorAll('.mytable')[2].removeEventListener('click',rollForward);
               document.querySelectorAll('.mytable')[3].removeEventListener('click',rollForward);
            if (pickedOrNot==true) {
                console.log('new Goti was picked!');
                document.getElementById('p2Home').removeEventListener('click',pickPiece);
            }
            //Next Player turn
            console.log('Next Player ajaei ab');
            if (totalPlayers>2) {
            document.getElementById('player-3').addEventListener('click',rollDice);
             
            }
            else{
            document.getElementById('player-1').addEventListener('click',rollDice);
             
            }
        }

    }
    else if (clicks.matches('.running-p3')) {
        console.log(clicks.offsetParent, "clicks offset");
        let prevId=clicks.offsetParent.id;
        prevId=String(prevId);
        
        let nextPos=parseInt(prevId.slice(-2),10);
        
        console.log("ma yahan hun ", nextPos);
        console.log('Before adding new pos in var: ',nextPos);
        for (let fwd_i = 0; fwd_i < dicePoints[0]; fwd_i++) {
            nextPos+=1;
            if (nextPos==63) {
                nextPos=11;
            }
            else if (nextPos==50) {
                nextPos=75;
            }
        }
        if (nextPos<=80) {
            newElement=clicks.parentNode;
            newElement.remove();
            console.log('\tElement Removed');
            document.getElementById('pos-'+nextPos).appendChild( newElement);
            console.log('After adding new pos in var: ',nextPos);
            console.log('Travelled ',dicePoints[0]);
            console.log(newElement);
            dicePoints.shift();
            if (nextPos==74) {
                p3_running--;
            }
        }
        if (dicePoints.length==0) {
                 
               // Track Event Listeners OFF 
               console.log('Track Listeners - OFF');
               document.querySelectorAll('.mytable')[0].removeEventListener('click',rollForward);
               document.querySelectorAll('.mytable')[1].removeEventListener('click',rollForward);
               document.querySelectorAll('.mytable')[2].removeEventListener('click',rollForward);
               document.querySelectorAll('.mytable')[3].removeEventListener('click',rollForward);
            if (pickedOrNot==true) {
                console.log('new Goti was picked!');
                document.getElementById('p3Home').removeEventListener('click',pickPiece);
            }
            //Next Player turn
            console.log('Next Player ajaei ab');
            if (totalPlayers>3) {
                document.getElementById('player-4').addEventListener('click',rollDice);
                 
                }
                else{
                document.getElementById('player-1').addEventListener('click',rollDice);
                 
                }
        }

    }
    else if (clicks.matches('.running-p4')) {
        console.log(clicks.offsetParent, "clicks offset");
        let prevId=clicks.offsetParent.id;
        console.log('prevId', prevId);
        prevId=String(prevId);
        
        let nextPos=parseInt(prevId.slice(-2),10);
        
        console.log("ma yahan hun ", nextPos);
        console.log('Before adding new pos in var: ',nextPos);
        for (let fwd_i = 0; fwd_i < dicePoints[0]; fwd_i++) {
            nextPos+=1;
            if (nextPos==63) {
                nextPos=11;
            }
            else if (nextPos==37) {
                nextPos=81;
            }
        }
        console.log("ma yahan hun ", nextPos);
        if (nextPos<=86) {
            newElement=clicks.parentNode;
            newElement.remove();
            console.log('\tElement Removed');
            document.getElementById('pos-'+nextPos).appendChild( newElement);
            console.log('After adding new pos in var: ',nextPos);
            console.log('Travelled ',dicePoints[0]);
            console.log(newElement);
            dicePoints.shift();
            if (nextPos==74) {
                p4_running--;
            }
        }
        if (dicePoints.length==0) {
                 
               // Track Event Listeners OFF
               console.log('Track Listeners - OFF');
               document.querySelectorAll('.mytable')[0].removeEventListener('click',rollForward);
               document.querySelectorAll('.mytable')[1].removeEventListener('click',rollForward);
               document.querySelectorAll('.mytable')[2].removeEventListener('click',rollForward);
               document.querySelectorAll('.mytable')[3].removeEventListener('click',rollForward);
            if (pickedOrNot==true) {
                console.log('new Goti was picked!');
                document.getElementById('p1Home').removeEventListener('click',pickPiece);
            }
            //Next Player turn
            console.log('Next Player ajaei ab');
            document.getElementById('player-1').addEventListener('click',rollDice);
            
        }

    }
}
//ROLL DICE
function rollDice(e){
   
    const clicks = e.target;
    if (clicks.matches('#dice-p1')) {            //------------------------- dice 1
        //clicks.src='./load.gif';
          
        randomNumber=randDiceRoll();
        console.log(randomNumber+1);
        clicks.src=diceFaces[randomNumber];
        dicePoints.push(randomNumber+1);
        //console.log('befroe IF ELSE of SIX COndition');
        if (randomNumber==5){
            console.log('SIX');
            console.log('Dobara Dice Roll Karein - Player 1');
        }
        else{
            console.log(p1_running, "p1_running");
            if (p1_running!=0) {
                console.log('Bari Chalein');
                console.log('Track Listeners ON - p1 Player');
                    // Track Event Listeners  
                document.querySelectorAll('.mytable')[0].addEventListener('click',rollForward);
                document.querySelectorAll('.mytable')[1].addEventListener('click',rollForward);
                document.querySelectorAll('.mytable')[2].addEventListener('click',rollForward);
                document.querySelectorAll('.mytable')[3].addEventListener('click',rollForward);

                console.log(document.querySelectorAll('.mytable'), "table");
            }
            if (dicePoints[0]==6) {
                console.log('Goti Nikalein / Bari Chalein');
                pickedOrNot=false;
                console.log(pickedOrNot,'Picked Or Not');
                document.getElementById('p1Home').addEventListener('click',pickPiece);
            }
			
			// var victim = HaveHover();
              //          if (victim != false) {
                //            ResetPawn(victim);
                  //      }
            else if(dicePoints[0]!=6 && p1_running==0){
                dicePoints=[]
                console.log('Bari Zaya hogai Apki - Player 2 Turn');
                document.getElementById('player-2').addEventListener('click',rollDice);
                 
            }
            console.log('No dice for Player - 1');
            
            document.getElementById('player-1').removeEventListener('click',rollDice);
            
        }
        
    }
    else if (clicks.matches('#dice-p2')) {                     //------------------------- dice 2
       
        
        randomNumber=randDiceRoll();
        console.log(randomNumber+1);
        clicks.src=diceFaces[randomNumber];
        dicePoints.push(randomNumber+1);
        //console.log('befroe IF ELSE of SIX COndition');
        if (randomNumber==5){
            console.log('SIX');
            console.log('Dobara Dice Roll Karein - Player 2');
        }
        else{
            
            if (p2_running!=0) {
                console.log('Bari Chalein');
                console.log('Track Listeners ON - p2 Player');
                    // Track Event Listeners  
                document.querySelectorAll('.mytable')[0].addEventListener('click',rollForward);
                document.querySelectorAll('.mytable')[1].addEventListener('click',rollForward);
                document.querySelectorAll('.mytable')[2].addEventListener('click',rollForward);
                document.querySelectorAll('.mytable')[3].addEventListener('click',rollForward);
            }
            if (dicePoints[0]==6) {
                console.log('Goti Nikalein / Bari Chalein');
                pickedOrNot=false;
                console.log(pickedOrNot,'Picked Or Not');
                document.getElementById('p2Home').addEventListener('click',pickPiece);
            }
            else if(dicePoints[0]!=6 && p2_running==0){
                dicePoints=[]
                if (totalPlayers>2) {
                    console.log('Bari Zaya hogai Apki - Player 3 Turn');
                   
                document.getElementById('player-3').addEventListener('click',rollDice);
                 
                }
                else{
                    console.log('Bari Zaya hogai Apki - Player 1 Turn');
                document.getElementById('player-1').addEventListener('click',rollDice);
                 
                }
                
            }
            console.log('No dice for Player - 2');
            
            document.getElementById('player-2').removeEventListener('click',rollDice);
            
            

        }
      }
      else if (clicks.matches('#dice-p3')) {
      
        
        randomNumber=randDiceRoll();
        console.log(randomNumber+1);
        clicks.src=diceFaces[randomNumber];
        dicePoints.push(randomNumber+1);
        //console.log('befroe IF ELSE of SIX COndition');
        if (randomNumber==5){
            console.log('SIX');
            console.log('Dobara Dice Roll Karein - Player 3');
        }
        else{
            
            if (p3_running!=0) {
                console.log('Bari Chalein');
                console.log('Track Listeners ON - p3 Player');
                    // Track Event Listeners  
                document.querySelectorAll('.mytable')[0].addEventListener('click',rollForward);
                document.querySelectorAll('.mytable')[1].addEventListener('click',rollForward);
                document.querySelectorAll('.mytable')[2].addEventListener('click',rollForward);
                document.querySelectorAll('.mytable')[3].addEventListener('click',rollForward);
            }
            if (dicePoints[0]==6) {
                console.log('Goti Nikalein / Bari Chalein');
                pickedOrNot=false;
                console.log(pickedOrNot,'Picked Or Not');
                document.getElementById('p3Home').addEventListener('click',pickPiece);
            }
            else if(dicePoints[0]!=6 && p3_running==0){
                dicePoints=[]
                if (totalPlayers>3) {
                    console.log('Bari Zaya hogai Apki - Player 4 Turn');
                    
                document.getElementById('player-4').addEventListener('click',rollDice);
                 
                }
                else{
                    console.log('Bari Zaya hogai Apki - Player 1 Turn');
                document.getElementById('player-1').addEventListener('click',rollDice);
                 
                }
            }
            console.log('No dice for Player - 3');
           
            document.getElementById('player-3').removeEventListener('click',rollDice);
            

        }
      }
      else if (clicks.matches('#dice-p4')) {
       
        
        randomNumber=randDiceRoll();
        console.log(randomNumber+1);
        clicks.src=diceFaces[randomNumber];
        dicePoints.push(randomNumber+1);
        //console.log('befroe IF ELSE of SIX COndition');
        if (randomNumber==5){
            console.log('SIX');
            console.log('Dobara Dice Roll Karein - Player 4');
        }
        else{
            
            if (p4_running!=0) {
                console.log('Bari Chalein');
                console.log('Track Listeners ON - p4 Player');
                    // Track Event Listeners  
                document.querySelectorAll('.mytable')[0].addEventListener('click',rollForward);
                document.querySelectorAll('.mytable')[1].addEventListener('click',rollForward);
                document.querySelectorAll('.mytable')[2].addEventListener('click',rollForward);
                document.querySelectorAll('.mytable')[3].addEventListener('click',rollForward);
            }
            if (dicePoints[0]==6) {
                console.log('Goti Nikalein / Bari Chalein');
                pickedOrNot=false;
                console.log(pickedOrNot,'Picked Or Not');
                document.getElementById('p4Home').addEventListener('click',pickPiece);
            }
            else if(dicePoints[0]!=6 && p4_running==0){
                dicePoints=[]
                console.log('Bari Zaya hogai Apki - Player 1 Turn');
               
                document.getElementById('player-1').addEventListener('click',rollDice);
                 
            }
            console.log('No dice for Player - 4');
            
            document.getElementById('player-4').removeEventListener('click',rollDice);      

        }
      }   
    e.preventDefault();
    }


