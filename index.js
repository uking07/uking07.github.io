var nClick = 0;
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');


function myFunction() {
  if (nClick != 4) {
    nClick++;
  }
  else {
    alert('The clicks has reached ' + nClick);
  }

}

function userName() {
  var myName = prompt("What is your name: ");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Welcome " + myName;
}

myButton.onclick = function() {
  userName();
}
