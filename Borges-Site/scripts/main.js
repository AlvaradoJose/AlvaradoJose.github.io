let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/mateo.jpeg') {
      myImage.setAttribute('src','images/Mateo1.jpeg');
    } else {
      myImage.setAttribute('src','images/mateo.jpeg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    }
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mateo es cool, ¿verdad ' + myName + '?';
}

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mateo es cool, ¿verdad' + storedName, + '?';
}

myButton.onclick = function() {
    setUserName();
}