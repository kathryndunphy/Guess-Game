
var randomWordArr = ["dog", "cat", "mouse", "sloth"];
var randomWord = randsomeWordArr[Math.random() * randomWordArr.length)];
    var wins = 0;
    var losses = 0;
    
    var guessesLeft= 9;
    
    var answerArray = [] ;


    var updateGuessesLeft= function(){
        document.querySelector(#guesses-left).innerHTML = guessesleft;
    };
    }

var guess = prompt("What's your guess");

function startUp()
for (i=o; i<randomWord.length; i++){
    if (answer == guess){
        alert("Correct!");
        break;
    }else{
        guess = prompt("try again");
    }  
}