class Letter {
  constructor(letter) {
    this.letter = letter;
    this.guessed = false;
  }
  returnLetter() {
    if (!this.guessed) {
      return this.letter;
    } else {
      return "_";
    }
  }
  checkLetter(char) {
    if (this.letter === char) {
      this.guessed = true;
    }
  }
}

module.exports = Letter