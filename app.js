const puzzleEl = document.querySelector("#puzzle");
const guessesEl = document.querySelector("#guesses");
const game1 = new Hangman("Cat", 2);

puzzleEl.textContent = game1.getPuzzle();
guessesEl.textContent = game1.remainingGuesses;
console.log(game1.status);

window.addEventListener("keypress", function(e) {
  const guess = String.fromCharCode(e.charCode);
  if (guess.match(/^[a-z0-9 ]$/i)) {
    game1.makeGuess(guess);
    puzzleEl.textContent = game1.getPuzzle();
    guessesEl.textContent = game1.remainingGuesses;
    console.log(game1.status);
  }
});
