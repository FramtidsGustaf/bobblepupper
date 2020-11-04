class Game {
  constructor() {
    this.ball = new Ball();
    this.startScreen(this.autoCreatingBalls, this.ball);
  }
  startScreen(autoCreatingBalls, ball) {
    let start = document.getElementById("startScreen");
    let startButton = document.getElementById("startButton");
    let title = document.getElementById("title");
    document.addEventListener("click", (e) => {
      if (e.target === startButton) {
        autoCreatingBalls(ball);
        setTimeout(() => {
          start.style.opacity = "0";
          title.classList.remove("invisible");
          title.classList.add("titleColor");
        }, 100);
        setTimeout(() => {
          start.remove();
        }, 500);
      }
    });
  }
  autoCreatingBalls(ball) {
    setInterval(() => {
      ball.createBall();
    }, Math.floor(Math.random() * 1000) + 500);
  }
}
