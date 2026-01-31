import { traces } from "../core/memory-trace.js";
import { decay } from "../core/decay-engine.js";
import { witness } from "./organism.js";

const canvas = document.getElementById("organism");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

canvas.addEventListener("mousemove", (e) => {
  witness(e.clientX, e.clientY);
});

let lastTime = performance.now();

function render(now) {
  const delta = now - lastTime;
  lastTime = now;

  ctx.fillStyle = "rgba(5,5,5,0.15)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  traces.forEach(t => {
    ctx.beginPath();
    ctx.arc(t.x, t.y, 40 * t.intensity, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(180,180,180,${t.intensity * 0.25})`;
    ctx.fill();
  });

  decay(delta);
  requestAnimationFrame(render);
}

render(lastTime);
