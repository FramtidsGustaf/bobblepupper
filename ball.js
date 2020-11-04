class Ball {
  constructor() {
    this.explosion = new Explosion();
  }
  createBall() {
    let colorArray = [`#e3b505`, `#95190c`, `#610345`, `#107e7d`, `#044B7f`];
    let playField = document.getElementById("playField");
    let ball = document.createElement("div");
    let rnd = Math.floor(Math.random() * 100) + 50;
    let rndSpeed = Math.floor(Math.random() * 50) + 10;
    let rndTop = Math.floor(Math.random() * 500) + 70;
    let rndColor = Math.floor(Math.random() * 5);
    ball.style.height = `${rnd}px`;
    ball.style.width = `${rnd}px`;
    ball.style.top = `${rndTop}px`;
    ball.style.borderRadius = `50%`;
    ball.style.backgroundColor = colorArray[rndColor];
    ball.style.transition = `all ${rndSpeed}s linear`;
    ball.style.position = `absolute`;
    ball.style.left = `-1px`;
    playField.appendChild(ball);
    setTimeout(() => {
      ball.style.left = `150%`;
    });
    document.addEventListener("click", (e) => {
      if (e.target === ball) {
        ball.remove();
        this.explosion.explode(e.clientX, e.clientY);
      }
    });
  }
}
