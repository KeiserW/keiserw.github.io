  let myImage = document.querySelector('img');

  myImage.onclick = function() {
      let mySrc = myImage.getAttribute('src');
      if(mySrc === 'images/photo1.jpg') {
        myImage.setAttribute('src','images/chonkydino.jpg');
      } else {
        myImage.setAttribute('src','images/photo1');
      }
  }

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if (!myName) {
    setUserName();
  } else {
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Dinosaurs are the shit, right ' + myName + '?';
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Dinosaurs are the shit, right ' + storedName + '?';
}

myButton.onclick = function() {
  setUserName();
}
