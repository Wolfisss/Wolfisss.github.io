function f1() {
  var d1 = document.createElement("div");
  d1.style.class = "knopka";
  document.body.appendChild(d1);
 /* var rId = requestAnimationFrame(f2);
  var lastTime = null;
  function f2(time) {
    if (lastTime == null) lastTime = time;
    d1.style.opacity += 0.001*(time - lastTime)*0.01;
    if (d1.style.opacity == 1) cancelAnimationFrame(rId);
    else requestAnimationFrame(f2);
  } */
}
window.addEventListener("load", f1);
