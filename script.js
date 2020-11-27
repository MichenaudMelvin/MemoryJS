var risoto = document.getElementById("risoto");


function display(){
  document.getElementById("carte").style.color = "blue";
  document.getElementById("carte").innerHTML = "test";
}

document.getElementById("carte").onclick = function {display()};

function test(){
 risoto.style.color = "blue";
  risoto.innerHTML = "test";
};

//fonction de test

  risoto.onclick = function() {
  test();
};
