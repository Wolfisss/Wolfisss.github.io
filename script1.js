var scena = 1;
function f1() {
  switch (scena) {
    case 1: {
      var d1 = document.createElement("div");
      var d2 = document.createElement("div");
      var d3 = document.createElement("div");
      var d1d = document.createElement("div");
      var d2d = document.createElement("div");
      var d3d = document.createElement("div");
      d1.classList.add("knopka");
      d2.classList.add("knopka");
      d3.classList.add("knopka");
      d1d.classList.add("txtcenter");
      d2d.classList.add("txtcenter");
      d3d.classList.add("txtcenter");
      d1d.textContent = "Играть";
      d2d.textContent = "Настроить";
      d3d.textContent = "Узнать";
      d1.appendChild(d1d);
      d2.appendChild(d2d);
      d3.appendChild(d3d);
      d1.style.opacity = 0;
      d2.style.opacity = 0;
      d3.style.opacity = 0;
      d1.addEventListener("click", f3);
      d2.addEventListener("click", f3);
      d3.addEventListener("click", f3);
      document.body.appendChild(d1);
      document.body.appendChild(d2);
      document.body.appendChild(d3); 
      var lastTime = null; var opop = 0;
      var rId = requestAnimationFrame(f2);
      function f2(time) {
        if (lastTime == null) lastTime = time;
        opop += 0.001*(time - lastTime);
        lastTime = time;
        if (opop >= 1) cancelAnimationFrame(rId);
        else {
          d1.style.opacity = opop;
          d2.style.opacity = opop;
          d3.style.opacity = opop;
          requestAnimationFrame(f2);
        }
      }
    } break;
    case 2: {
      var d1 = document.createElement("div");
      var d2 = document.createElement("div");
      var d3 = document.createElement("div");
      d1.textContent = tx;
      d1.style.color = "white";
      d1.style.fontSize = "25px";
      d2.classList.add("knopka");
      d3.classList.add("txtcenter");
      d3.textContent = "Ясненько";
      d2.appendChild(d3);
      document.body.appendChild(d1);
      document.body.appendChild(d2);
    } break;
    case 3: {
      alert("scena 3");
    } break;
    case 4: {
      alert("scena 4");
    } break;
  } 
}
function f3(event) {
  switch (scena) {
    case 1: {
      var dd = document.querySelectorAll("div");
      if (event.currentTarget == dd[0]) scena = 4;
      if (event.currentTarget == dd[2]) scena = 3;
      if (event.currentTarget == dd[4]) scena = 2;
      var lastTime = null; var opop = 1;
      var rId = requestAnimationFrame(f2);
      function f2(time) {
        if (lastTime == null) lastTime = time;
        opop -= 0.001*(time - lastTime);
        lastTime = time;
        if (opop <= 0) {      
          document.body.removeChild(dd[4]);
          document.body.removeChild(dd[2]);
          document.body.removeChild(dd[0]);
          cancelAnimationFrame(rId);
          f1();
        }
        else {
          dd[0].style.opacity = opop;
          dd[2].style.opacity = opop;
          dd[4].style.opacity = opop;
          requestAnimationFrame(f2);
        }
      }
    } break;
    case 2: {
    } break;
    case 3: {
    } break;
    case 4: {
    } break;
  }
}
window.addEventListener("load", f1);
var tx = "Пошаговая игра Мир \n Вы - лев.";
