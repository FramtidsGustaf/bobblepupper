document.addEventListener("DOMContentLoaded", () => {
  let top = document.getElementById("top");
  let colorArray = ["#f4b942", "#eff2f1", "#ff3a20", "#ff521b", "#ef2d56"];
  window.addEventListener("click", (e) => {
    for (let i = 0; i < 50; i++) {
      let element = document.createElement("div");
      rndColor = Math.floor(Math.random() * 5);

      element.classList.add("particle");
      element.style.backgroundColor = `${colorArray[rndColor]}`;
      element.style.position = "absolute";
      element.style.top = `${e.clientY}px`;
      element.style.left = `${e.clientX}px`;

      setTimeout(() => {
        rnd1 = Math.floor(Math.random() * 1000) + 1;
        rnd1 *= Math.round(Math.random()) ? 1 : -1;
        rnd2 = Math.floor(Math.random() * 1000) + 1;
        rnd2 *= Math.round(Math.random()) ? 1 : -1;
        element.style.top = `${e.clientY + rnd1}px`;
        element.style.left = `${e.clientX + rnd2}px`;
      }, 1);

      setTimeout(() => {
        element.style.height = "0px";
        element.style.width = "0px";
      }, 300);

      setTimeout(() => {
        element.remove();
      }, 500);

      top.appendChild(element);
    }
  });
});
