function f1() {
  var d1 = document.createElement("div");
  d1.classList.add("knopka");
  d1.style.opacity = 0;
  document.body.appendChild(d1);
  var lastTime = null;
  var rId = requestAnimationFrame(f2);
  function f2(time) {
    if (lastTime == null) lastTime = time;
    d1.style.opacity += 0.001*(time - lastTime);
    if (d1.style.opacity == 1) cancelAnimationFrame(rId);
    else requestAnimationFrame(f2);
  }
}
window.addEventListener("load", f1);
