

var diceFaces = new Array("./one.png","./two.png","./three.png","./four.png","./five.png","./six.png",);
    console.log(diceFaces);
var totalPlayers = 4;
var gameEnd = false;


for(let i=1; i<totalPlayers+1; i++){
    document.getElementById('player-'+i).classList.remove('disabledDiv');
    document.getElementById("dice-p"+i).src='./dice.gif';
}



let dice_p1 = "#dice-p1",
    dice_p2 = "#dice-p2",
    dice_p3 = "#dice-p3",
    dice_p4 = "#dice-p4",
    randomNumber,
    dicePoints=[],
    newElement,
    p1_running=0,
    p2_running=0,
    p3_running=0,
    p4_running=0,
    pickedOrNot;

    

