
function myMove() {
  let id = null;
  const elem = document.getElementById("arrow");   
  let pos = 80;
    clearInterval(id);
    pos=80;
  id = setInterval(frame, 2);
  function frame() {
    if (pos >= 150) {
      clearInterval(id);
    } else {
      pos=pos+0.3; 
      elem.style.left = pos + "px"; 
    }
       
  }
}

