
var randomWordArr = ["dog", "cat", "mouse", "sloth"];
var randomWord = randsomeWordArr[Math.floor(Math.random() * randomWordArr.length)];
    var wins = 0;
    var losses = 0;
    
    var guessesLeft= 9;
    
    var answerArray = [] ;
    var letter =[];


    var updateGuessesLeft= function(){
       guessesLeft
        document.querySelector("#guesses-left").innerHTML = guessesleft;

    };
    //  make a math function that says with keyup changes guesses left is wrong
// audioElement to add audio


var guess = prompt("What's your guess");







function startUp()
for (i=0; i<randomWord.length; i++){
    
     
    
    if (letter === guessedLetters[i]){
        alert("Correct!");
        wins++;
        document.querySelector("#wins").innerHTML= wins;
        reset();
    }else{
        guess = prompt("try again, beyotch");
    }  
    updateGuessesLeft();
    updateGuessesSoFar();
}