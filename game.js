class Game {
  constructor() {
    this.ball = new Ball();
    this.autoCreatingBalls(this.ball);
  }
  autoCreatingBalls(ball) {
    setInterval(() => {
      ball.createBall();
    }, Math.floor(Math.random() * 500) + 100);
  }
}
