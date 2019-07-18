const Letter = require('./letter')

class Word {
  constructor(input) {
    this.letters = input.split("").map(letter => new Letter(letter));
  }
  returnString() {
    this.letters.forEach(letter => letter.returnLetter());
  }
  guessLetter(char) {
    this.letters.forEach(letter => letter.checkLetter())
  }
}

module.exports = Word;