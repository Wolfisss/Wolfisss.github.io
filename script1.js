function f1() {
  var d1 = document.createElement("div");
  d1.classList.add("knopka");
  d1.style.opacity = 0;
  document.body.appendChild(d1);
  var lastTime = null; var opop = 0;
  var rId = requestAnimationFrame(f2);
  function f2(time) {
    if (lastTime == null) lastTime = time;
    opop += 0.01*(time - lastTime);
    if (opop >= 1) cancelAnimationFrame(rId);
    else {
      d1.style.opacity = opop;
      requestAnimationFrame(f2);
    }
  }
}
window.addEventListener("load", f1);
