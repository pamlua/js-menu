function myMouseOver() {
  this.className="menuHover";  
}
function myMouseOut() {
  this.className="menuStatic";
}
function myMouseClick() {
  for (var i=0; i<5; i++) {
    var element = document.getElementById("menuLi-"+i);
   if(element.className== "menuHover"){
     element.addEventListener("mouseout", myMouseOut);
     element.className = "menuStatic";
  }
  }
  this.className="menuHover";
  this.removeEventListener("mouseout", myMouseOut);
}

for (var i=0; i<5; i++) {
 document.getElementById("menuLi-"+i).addEventListener("mouseover", myMouseOver);
 document.getElementById("menuLi-"+i).addEventListener("mouseout", myMouseOut);
 document.getElementById("menuLi-"+i).addEventListener("click", myMouseClick);
}