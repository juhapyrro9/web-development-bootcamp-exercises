var numberOfDrumButtons = document.querySelectorAll('.drum').length;

for(i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll('.drum')[i].addEventListener('click', function(){
        var buttonInnerHtml = this.innerHTML;
        playDrums(buttonInnerHtml);
    });

}


document.addEventListener('keydown', function(event) {
    var pressedButton = event.key;
    playDrums(pressedButton);
});


function playDrums(letter) {

    buttonAnimation(letter);

    switch (letter) {
        case 'w':
            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;  

        case 'a':
            var audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
            break;  

        case 's':
            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;  

        case 'd':
            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;  

        case 'j':
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();
            break;  

        case 'k':
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
            break;  

        case 'l':
            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;  
    
        default:
            console.log(buttonInnerHtml);
            break;
    }
}


function buttonAnimation(pressedKey) {
    var activeButton = document.querySelector('.' + pressedKey);
    activeButton.classList.add('pressed');

    setTimeout(function() { 
        activeButton.classList.remove('pressed')
    }, 100);
}

