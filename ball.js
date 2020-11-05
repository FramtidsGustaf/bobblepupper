class Ball {
  constructor() {
    this.explosion = new Explosion();
    this.score = new Score();
    this.colorArray = [`#e3b505`, `#95190c`, `#610345`, `#107e7d`, `#044B7f`];
    this.playField = document.getElementById("playField");
  }
  createBall() {
    let ball = document.createElement("div");
    let rnd = Math.floor(Math.random() * 100) + 50;
    let rndSpeed = Math.floor(Math.random() * 20) + 5;
    let rndTop = Math.floor(Math.random() * 70) + 10;
    let rndColor = this.colorArray[Math.floor(Math.random() * 5)];
    let isClicked = false;
    ball.style.height = `${rnd}px`;
    ball.style.width = `${rnd}px`;
    ball.style.borderRadius = `50%`;
    ball.style.backgroundColor = rndColor;
    ball.style.transition = `all ${rndSpeed}s linear`;
    ball.style.position = `absolute`;
    ball.style.top = `${rndTop}%`;
    ball.style.left = `-50%`;
    this.playField.appendChild(ball);
    setTimeout(() => {
      ball.style.left = `100%`;
      ball.style.transform = "translate(-100%)";
    }, 100);
    document.addEventListener("click", (e) => {
      if (e.target === ball) {
        ball.remove();
        this.explosion.explode(e.clientX, e.clientY, rndColor);
        isClicked = true;
        this.score.score++;
        this.score.currentScoreOutput();
      }
    });
    setTimeout(() => {
      if (!isClicked) {
        ball.remove();
        this.playField.remove();
        this.score.outPutScore();
      }
    }, rndSpeed * 1000);
  }
  createSquare() {
    let square = document.createElement("div");
    let rnd = Math.floor(Math.random() * 100) + 50;
    let rndSpeed = Math.floor(Math.random() * 10) + 3;
    let rndTop = Math.floor(Math.random() * 70) + 10;
    let rndColor = this.colorArray[Math.floor(Math.random() * 5)];
    let isClicked = false;
    square.style.height = `${rnd}px`;
    square.style.width = `${rnd}px`;
    square.style.borderRadius = `10px`;
    square.style.backgroundColor = rndColor;
    square.style.transition = `all ${rndSpeed}s linear`;
    square.style.position = `absolute`;
    square.style.top = `${rndTop}%`;
    square.style.left = `-50%`;
    this.playField.appendChild(square);
    setTimeout(() => {
      square.style.left = `100%`;
      square.style.transform = "translate(-100%)";
    }, 100);
    document.addEventListener("click", (e) => {
      if (e.target === square) {
        square.remove();
        this.explosion.explode(e.clientX, e.clientY, rndColor);
        isClicked = true;
        this.score.score++;
        this.score.currentScoreOutput();
      }
    });
    setTimeout(() => {
      if (!isClicked) {
        square.remove();
        this.playField.remove();
        this.score.outPutScore();
      }
    }, rndSpeed * 1000);
  }
}
