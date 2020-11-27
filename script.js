function display(){
  document.getElementById("carte").style.color = "blue";
  document.getElementById("carte").style.backgroundColor = "grey";
  document.getElementById("carte").innerHTML = "test";
}

document.getElementById("carte").onclick = function() {display()};