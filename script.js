// Hangman Game 

// Store all the possible words in a data format of some kind 
// When the user clicks start:
    // Choose a word 
    // Start the timer 
        // Every second: 
            // is the game over? 
                // If yes, must be a win, go to next word; 
                // If no, keep counting down
            // is the countdown done?
               // Must be a loss 
               // Go to next word
    // Display a number of blanks for each character in the answer 

// Listen for any letter to be guessed by keypress 
// Is the letter in the answer?
    // If no, we just keep going 
    // If yes, modify the displayed answer so the letter now appears 
// Is the answer completely filled out?
   // If so, mark as a win 
   // If not, keep going 

document.addEventListener("keypress", checkWord);


var gameBox = document.querySelector("#game-box");
var words = ["Javascript"];
var wordLength;

var timeEl = document.querySelector("#time");
var secondsLeft = 10;

var startElement = document.querySelector("#start-game");
startElement.addEventListener("click", start);
console.log("start");


function checkWord(event) {
    console.log(event);
    var pressedKey = event.pressedKey;
    for (var i= 0; i < wordLength; i++ ) {
       if (pressedKey = );
    }
}

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left till game over.";
  
      if(secondsLeft <= 0) {
        clearInterval(timerInterval);
      }
  
    }, 1000);
  }

function chooseWord(){
    var randomWord = words[Math.floor(Math.random() * randomWord.length)];
    console.log(randomWord);
    wordLength = randomWord.length;
    console.log(wordLength);

    for (var i =0; i <wordLength; i++ ) {
        var newElement = document.createElement("div");
        gameBox.append(newElement);
    };
}


function start() {
    setTime();
    chooseWord();
}

function startTmer() {

}
