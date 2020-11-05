class Game {
  constructor() {
    this.ball = new Ball();
    this.startScreen(this.autoCreatingBalls, this.autoCreatingSquares, this.ball);
  }
  startScreen(autoCreatingBalls, autoCreatingSquares, ball) {
    let start = document.getElementById("startScreen");
    let startButton = document.getElementById("startButton");
    let title = document.getElementById("title");
    let counter = 1;
    let difficultyIncreaser = () => {
      autoCreatingBalls(ball);
      setTimeout(() => {
        start.style.opacity = "0";
        title.classList.remove("invisible");
        title.classList.add("titleColor");
      }, 100);
      setTimeout(() => {
        start.remove();
        startButton.removeEventListener("click", difficultyIncreaser);
      }, 500);
      setInterval(() => {
        if (counter % 2 == 0) {
          autoCreatingBalls(ball);
          counter++;
        } else {
          autoCreatingSquares(ball);
          counter++;
        }
      }, 60000);
    };

    startButton.addEventListener("click", difficultyIncreaser);
  }
  autoCreatingBalls(ball) {
    setInterval(() => {
      if (document.getElementById("playField")) {
        ball.createBall();
      }
    }, Math.floor(Math.random() * 1000) + 500);
  }
  autoCreatingSquares(ball) {
    setInterval(() => {
      if (document.getElementById("playField")) {
        ball.createSquare();
      }
    }, Math.floor(Math.random() * 1000) + 500);
  }
}
