$(document).ready(function() {
    /** variables */
    // array of word options
    let wordlist = ['bmw', 'ford', 'lexus', 'toyota']
    let chosenWord = '';
    let dashWord = [];
    let userWins = 0;
    let numberGuesses = 10;
    /** functions */
    //function start game goes here somereason was tweaking
     function createDashWord(word) {
        for (var i=0; i < chosenWord.length; i++)
            if (letter === chosenWord[i]) {
                letterInWord = true;
                //guess is correct
            }
    }
    
    //** events */
    // page load
    
    
    // key up
    dashWord = createDashWord(chosenWord);
    document.onkeyup = function(event) {
        let letterGuessed = event.key.toLowerCase();
        console.log(event);
        debugger;
        checkLetters(letterGuessed);
    }
    
    // create the dashword
            $('#hintDiv').text(chosenWord);
            $('#dashDiv').text(dashWord.join(""));
            
     // check if letter in word
     for (var i=0; i < chosenWord.length; i++){
         if (letterGuessed === chosenWord[i]){
             dashWord[i] = letterGuessed;
         }
     }       
    
     // if dashword = chosenword you win
     if (dashWord.join("") === chosenWord){ 
         userWins++;
        // start new game 
        chosenWord = wordList[Math.floor(Math.random())]
    
     }
            $('#dashDiv').text(dashWord.join(" "));
            $('#winSpan').text(userWins);
    });