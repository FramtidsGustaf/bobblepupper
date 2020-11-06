class Ball {
  constructor() {
    this.explosion = new Explosion();
    this.score = new Score();
    this.colorArray = [`#e3b505`, `#95190c`, `#610345`, `#107e7d`, `#044B7f`];
    this.playField = document.getElementById("playField");
    this.playFieldWidth = document.getElementsByTagName("body")[0].clientWidth;
  }
  createBall() {
    let ball = document.createElement("div");
    let rnd = Math.floor(Math.random() * 100) + 50;
    let rndSpeed =
      Math.floor(Math.random() * (this.playFieldWidth / 100)) + this.playFieldWidth / 110;
    let rndTop = Math.floor(Math.random() * 70) + 10;
    let rndColor = this.colorArray[Math.floor(Math.random() * 5)];
    let isClicked = false;
    ball.style.height = `${rnd}px`;
    ball.style.width = `${rnd}px`;
    ball.style.borderRadius = `50%`;
    ball.style.boxShadow = `-1rem 1rem 1rem #0e0e11`;
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

    let removeEnemy = (event) => {
      ball.removeEventListener("click", removeEnemy);
      ball.remove();
      this.explosion.explode(event.clientX, event.clientY, rndColor);
      isClicked = true;
      this.score.score++;
      this.score.currentScoreOutput();
    };

    ball.addEventListener("click", removeEnemy);
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
    let rndSpeed =
      Math.floor(Math.random() * (this.playFieldWidth / 130)) + this.playFieldWidth / 140;
    let rndTop = Math.floor(Math.random() * 70) + 10;
    let rndColor = this.colorArray[Math.floor(Math.random() * 5)];
    let isClicked = false;
    square.style.height = `${rnd}px`;
    square.style.width = `${rnd}px`;
    square.style.borderRadius = `10px`;
    square.style.boxShadow = `-1rem 1rem 1rem #0e0e11`;
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

    let removeEnemy = (event) => {
      square.removeEventListener("click", removeEnemy);
      square.remove();
      this.explosion.explode(event.clientX, event.clientY, rndColor);
      isClicked = true;
      this.score.score++;
      this.score.currentScoreOutput();
    };

    square.addEventListener("click", removeEnemy);
    setTimeout(() => {
      if (!isClicked) {
        square.remove();
        this.playField.remove();
        this.score.outPutScore();
      }
    }, rndSpeed * 1000);
  }
}
