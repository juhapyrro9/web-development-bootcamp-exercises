function rollDice() {
    var diceOneElement = document.querySelector('.img1');
    var diceTwoElement = document.querySelector('.img2');
    var flagOneElement = document.querySelector('.flag1');
    var flagTwoElement = document.querySelector('.flag2');

    var diceOneValue = Math.floor(Math.random() * 6) + 1;
    var diceTwoValue = Math.floor(Math.random() * 6) + 1;

    diceOneElement.setAttribute("src", "./images/dice" + diceOneValue + ".png");
    diceTwoElement.setAttribute("src", "./images/dice" + diceTwoValue + ".png");

    if(diceOneValue > diceTwoValue) {
        document.querySelector('h1').innerHTML = 'Player 1 Wins';
        flagOneElement.innerHTML = '<img src="./images/flag.png">';
    } else if (diceOneValue < diceTwoValue) {
        document.querySelector('h1').innerHTML = 'Player 2 Wins';
        flagTwoElement.innerHTML = '<img src="./images/flag.png">';
    } else if (diceOneValue == diceTwoValue) {
        document.querySelector('h1').innerHTML = 'Draw';
    } 

    console.log('diceOneValue: ' + diceOneValue);
    console.log('diceTwoValue: ' + diceTwoValue);

    
}

rollDice();