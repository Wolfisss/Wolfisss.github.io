let im = document.querySelector("img");
im.addEventListener("click", gStart);
function gStart(){
 im.style = "display: none";
 var cats = 0, miss = 0, level = 1;
 var p1 = document.getElementById("p1");
 var p2 = document.getElementById("p2");
 var p3 = document.getElementById("p3");
 var md = document.getElementById("mdiv");
 p1.textContent = "catch: " + cats.toString();
 p2.textContent = "miss: " + miss.toString();
 p3.textContent = "level: " + level.toString();
 var canv = document.createElement("canvas");
 md.appendChild(canv);
 canv.width = 668;
 canv.height = 558;
 canv.style.borderRadius = "6px";
 cx = canv.getContext("2d");
 canv.addEventListener("click", f1);
 function f1(){
  let r = Math.floor(Math.random()*256);
  let g = Math.floor(Math.random()*256);
  let b = Math.floor(Math.random()*256);
  md.style.background = "#" + r.toString(16) +
   g.toString(16) + b.toString(16);
  cx.drawImage(im, getCoord(5).x,getCoord(5).y,150,150,
   Math.floor(Math.random()*668),Math.floor(Math.random()*558),150,150);
  function getCoord(icat) {
   switch (icat) {
    case 1: return {x: 0, y: 0}; break;
    case 2: return {x: 170, y: 0}; break;
    case 3: return {x: 340, y: 0}; break;
    case 4: return {x: 510, y: 0}; break;
    case 5: return {x: 0, y: 190}; break;
    case 6: return {x: 0, y: 340}; break;
    case 7: return {x: 0, y: 0}; break;
    case 8: return {x: 170, y: 0}; break;
    case 9: return {x: 340, y: 0}; break;
    case 10: return {x: 0, y: 0}; break;
    case 11: return {x: 170, y: 0}; break;
    case 12: return {x: 340, y: 0}; break;
   }
  }
 }
}
