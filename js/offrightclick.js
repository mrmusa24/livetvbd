var BM = 2; // button middle
var BR = 3; // button right
var msg ="MOUSE RIGHT CLICK IS NOT SUPPORTED ON THIS PAGE";
function mouseDown(e) 
{ 
  try { if (event.button==BM||event.button==BR) {return false;} }  
  catch (e) { if (e.which == BR) {return false;} } 
}
document.oncontextmenu = function() { /*alert(msg);*/ return false; }
document.ondragstart   = function() { /*alert(msg);*/ return false; }
document.onmousedown   = mouseDown;