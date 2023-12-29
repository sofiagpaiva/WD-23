dragElement(document.getElementById("tab1",));
dragElement(document.getElementById("tab2",));
dragElement(document.getElementById("tab3",));
dragElement(document.getElementById("tab4",));
dragElement(document.getElementById("tab5",));
dragElement(document.getElementById("tab6",));
dragElement(document.getElementById("tab7",));
dragElement(document.getElementById("tab8",));
dragElement(document.getElementById("tab9",));
dragElement(document.getElementById("tab10",));
dragElement(document.getElementById("tab11",));
dragElement(document.getElementById("tab12",));
dragElement(document.getElementById("tab13",));
dragElement(document.getElementById("tab14",));
dragElement(document.getElementById("tab15",));
dragElement(document.getElementById("tab16",));
dragElement(document.getElementById("tab17",));
dragElement(document.getElementById("tab18",));
dragElement(document.getElementById("tab19",));
dragElement(document.getElementById("tab20",));
dragElement(document.getElementById("tab21",));
dragElement(document.getElementById("tab22",));
dragElement(document.getElementById("tab23",));
dragElement(document.getElementById("tab24",));
dragElement(document.getElementById("tab25",));
dragElement(document.getElementById("tab26",));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
  
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown;
    }
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }