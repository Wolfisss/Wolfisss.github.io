let im = document.querySelector("img");
im.addEventListener("click", gStart);
function gStart(){
 im.style ="display: none";
 var cats = 0, miss = 0, level = 1;
 var p1 = document.getElementById("p1");
 var p2 = document.getElementById("p2");
 var p3 = document.getElementById("p3");
 var md = document.getElementById("mdiv");
 p1.textContent = "cats: " + cats.toString();
 p2.textContent = "miss: " + miss.toString();
 p3.textContent = "level: " + level.toString();
 var canv = document.createElement("canvas");
 md.appendChild(canv);
 canv.style.width = "668px";
 canv.style.height = "558px";
 canv.style.borderRadius = "6px";
 cx = canv.getContext("2d");
 canv.addEventListener("click", f1);
 function f1(){
  let r = Math.floor(Math.random()*256);
  let g = Math.floor(Math.random()*256);
  let b = Math.floor(Math.random()*256);
  md.style.background = "#" + r.toString(16) +
   g.toString(16) + b.toString(16);
  cx.drawImage(im, getCoord(1).x, getCoord(1).y,
   getCoord(1).a, getCoord(1).b,
   Math.floor(Math.random()*500), Math.floor(Math.random()*500), 150, 150));
 }
 function getCoord(inum) {
  if (inum == 1)
   return {x: 0, y: 0, a: 150, b: 150};
 }
}
