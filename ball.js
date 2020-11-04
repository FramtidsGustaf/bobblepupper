class Ball {
  constructor() {
    this.explosion = new Explosion();
  }
  createBall() {
    let colorArray = [`#e3b505`, `#95190c`, `#610345`, `#107e7d`, `#044B7f`];
    let playField = document.getElementById("playField");
    let ball = document.createElement("div");
    let rnd = Math.floor(Math.random() * 100) + 50;
    let rndSpeed = Math.floor(Math.random() * 20) + 5;
    let rndTop = Math.floor(Math.random() * 70) + 10;
    let rndColor = Math.floor(Math.random() * 5);
    ball.style.height = `${rnd}px`;
    ball.style.width = `${rnd}px`;
    ball.style.borderRadius = `50%`;
    ball.style.backgroundColor = colorArray[rndColor];
    ball.style.transition = `all ${rndSpeed}s linear`;
    ball.style.position = `absolute`;
    ball.style.top = `${rndTop}%`;
    ball.style.left = `-50%`;
    playField.appendChild(ball);
    setTimeout(() => {
      ball.style.left = `100%`;
      ball.style.transform = "translate(-100%)";
    }, 100);
    document.addEventListener("click", (e) => {
      if (e.target === ball) {
        ball.remove();
        this.explosion.explode(e.clientX, e.clientY);
      }
    });
    setTimeout(() => {
      ball.remove();
    }, rndSpeed * 1000);
  }
}
Ö;
