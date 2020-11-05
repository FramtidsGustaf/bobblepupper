class Explosion {
  constructor() {}
  explode(x, y, color) {
    let playField = document.getElementById("playField");
    let colorArray = ["#f4b942", "#eff2f1", "#ff3a20", "#ff521b", "#ef2d56"];
    for (let i = 0; i < 50; i++) {
      let element = document.createElement("div");
      let rndColor = colorArray[Math.floor(Math.random() * 5)];

      element.classList.add("particle");
      if (i % 2 === 0) {
        element.style.backgroundColor = color;
      } else {
        element.style.backgroundColor = rndColor;
      }
      element.style.position = "absolute";
      element.style.top = `${y}px`;
      element.style.left = `${x}px`;

      setTimeout(() => {
        let rnd1 = Math.floor(Math.random() * 200) + 1;
        rnd1 *= Math.round(Math.random()) ? 1 : -1;
        let rnd2 = Math.floor(Math.random() * 200) + 1;
        rnd2 *= Math.round(Math.random()) ? 1 : -1;
        element.style.top = `${y + rnd1}px`;
        element.style.left = `${x + rnd2}px`;
      }, 1);

      setTimeout(() => {
        element.style.height = "0px";
        element.style.width = "0px";
      }, 175);

      setTimeout(() => {
        element.remove();
      }, 275);

      playField.appendChild(element);
    }
  }
}
