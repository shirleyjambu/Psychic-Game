// Intialize
var winCount = 0;
var lossCount = 0;
var guessesLeft = 10;
var alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Setting up elements
$usrMsg = document.getElementById("usrMsg");
$usrGuessList = document.getElementById("usrGuessList");
$usrGuessCount = document.getElementById("usrGuessCount");
$usrWin = document.getElementById("usrWin");
$usrLoss = document.getElementById("usrLoss");

function getRandomLetter(){
  var rdm = alphabets[Math.floor(Math.random() * alphabets.length)];  
  console.log("Random Letter Chosen : " + rdm);
  return rdm;
}

// Pick a random letter
var rdmAlphabet = getRandomLetter();
var allGuesses = "";
var keyEntered = "";
$usrMsg.textContent = "";


// When user types in a key
document.onkeyup = function gameOn(event) {
    keyEntered = event.key;
  // Until Number of guesses less than 10
  if (guessesLeft > 0 && guessesLeft <= 10) {
    // set the content of all guesses using id
    $usrMsg.textContent = "";
    allGuesses = $usrGuessList.textContent;
    $usrGuessList.textContent = allGuesses + " " + keyEntered;
    // Decrement the counter, set the counter value
    guessesLeft--;
    $usrGuessCount.textContent = guessesLeft;

    // if the keys entered match the random alphabet, set message, increment win count, clear user guesses, set the win count
    if (keyEntered.toLowerCase() === rdmAlphabet.toLowerCase()) {
      winCount++;
      $usrMsg.innerHTML = "<br><h4> You Win !!! It was a '" + rdmAlphabet + "' . Start Again </h4>";
      $usrWin.textContent = winCount;
      $usrGuessList.textContent = "";
      guessesLeft = 10;
      rdmAlphabet = getRandomLetter();
    }
    // else set user msg, intialise elements for starting another game
  } else {
    lossCount++;
    $usrMsg.innerHTML = "<br><h4> You Lose !!! It was a '" + rdmAlphabet + "' . Start Again </h4>";
    $usrLoss.textContent = lossCount;
    $usrGuessList.textContent = "";
    guessesLeft = 10;
    rdmAlphabet = getRandomLetter();
  }
}