document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("holiCanvas");
  const ctx = canvas.getContext("2d");

  let isDrawing = false;

  function draw(e) {
    if (!isDrawing) return;

    const { offsetX, offsetY } = e;
    const hue = Math.random() * 360;
    ctx.fillStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.arc(offsetX, offsetY, 10, 0, Math.PI * 2);
    ctx.fill();
  }

  canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    draw(e);
  });

  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("mouseup", () => (isDrawing = false));
  canvas.addEventListener("mouseout", () => (isDrawing = false));
});
