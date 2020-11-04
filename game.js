class Game {
  constructor() {
    this.ball = new Ball();
    this.button = document.getElementById("button");
    this.autoCreatingBalls(this.ball);
    window.addEventListener("click", (e) => {
      if (e.target === button) {
        this.ball.createBall();
      }
    });
  }
  autoCreatingBalls(ball) {
    setInterval(() => {
      ball.createBall();
    }, Math.floor(Math.random() * 500) + 100);
  }
}
