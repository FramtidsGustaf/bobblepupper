class Score {
  constructor() {
    this.score = 0;
  }

  outPutScore() {
    let endScore = document.getElementById("endScore");
    endScore.textContent = `You got ${this.score} points`;
  }
}
