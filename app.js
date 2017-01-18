'use strict';

// global variables
var objects = [];
var divOne = document.getElementById('image-one');
var divTwo = document.getElementById('image-two');
var divThree = document.getElementById('image-three');
var rounds = 0;
var leftProduct;
var centerProduct;
var rightProduct;

// object constructor
function Items (name, path, timesShown, timesClicked){
  this.name = name;
  this.path = path;
  this.timesShown = timesShown;
  this.timesClicked = timesClicked;
};

// global functions
function randomNumber() { //generate a random number
  var random = Math.floor(Math.random() * objects.length);
  console.log(random);
  return random;
}

function displayPics() {  //display three images to index.html
  var left = new Image();
  left.setAttribute('id', 'pictureOne');
  var leftIndex = randomNumber();
  leftProduct = objects[leftIndex];
  left.src = leftProduct.path;
  left.alt = leftProduct.name;
  leftProduct.timesShown += 1;
  divOne.appendChild(left);

  var centerIndex = randomNumber();
  while (centerIndex === leftIndex){
    centerIndex = randomNumber();
  }

  var center = new Image();
  center.setAttribute('id', 'pictureTwo');
  centerProduct = objects[centerIndex];
  center.src = centerProduct.path;
  center.alt = centerProduct.name;
  centerProduct.timesShown += 1;
  divTwo.appendChild(center);

  var rightIndex = randomNumber();
  while (rightIndex === leftIndex || rightIndex === centerIndex){
    rightIndex = randomNumber();
  }

  var right = new Image();
  right.setAttribute('id', 'pictureThree');
  rightProduct = objects[rightIndex];
  right.src = rightProduct.path;
  right.alt = rightProduct.name;
  rightProduct.timesShown += 1;
  divThree.appendChild(right);
}

function removePics() { //remove the currently displayed pictures
  var elRemove = document.getElementById('pictureOne');
  elRemove.parentNode.removeChild(elRemove);
  var elRemoveTwo = document.getElementById('pictureTwo');
  elRemoveTwo.parentNode.removeChild(elRemoveTwo);
  var elRemoveThree = document.getElementById('pictureThree');
  elRemoveThree.parentNode.removeChild(elRemoveThree);
}

function groupFunctions() {
  displayPics();
  console.log(objects);
  var elRefreshOne = document.getElementById('pictureOne');
  elRefreshOne.addEventListener('click', function() {
    leftProduct.timesClicked++;
    removePics();
    groupFunctions();
  }, false);
  var elRefreshTwo = document.getElementById('pictureTwo');
  elRefreshTwo.addEventListener('click', function() {
    centerProduct.timesClicked++;
    removePics();
    groupFunctions();
  }, false);
  var elRefreshThree = document.getElementById('pictureThree');
  elRefreshThree.addEventListener('click', function() {
    rightProduct.timesClicked++;
    removePics();
    groupFunctions();
  }, false);
  rounds++;
  if (rounds < 6) {
    console.log('Round number: ' + rounds);
  } else {
    final();
  }
}

// objects
objects.push(new Items ('bag', 'img/bag.jpg', 0, 0));
objects.push(new Items ('banana', 'img/banana.jpg', 0, 0));
objects.push(new Items ('bathroom', 'img/bathroom.jpg', 0, 0));
objects.push(new Items ('boots', 'img/boots.jpg', 0, 0));
objects.push(new Items ('breakfast', 'img/breakfast.jpg', 0, 0));
objects.push(new Items ('bubblegum', 'img/bubblegum.jpg', 0, 0));
objects.push(new Items ('chair', 'img/chair.jpg', 0, 0));
objects.push(new Items ('cthulhu', 'img/cthulhu.jpg', 0, 0));
objects.push(new Items ('dog-duck', 'img/dog-duck.jpg', 0, 0));
objects.push(new Items ('dragon', 'img/dragon.jpg', 0, 0));
objects.push(new Items ('pen', 'img/pen.jpg', 0, 0));
objects.push(new Items ('pet-sweep', 'img/pet-sweep.jpg', 0, 0));
objects.push(new Items ('scissors', 'img/scissors.jpg', 0, 0));
objects.push(new Items ('shark', 'img/shark.jpg', 0, 0));
objects.push(new Items ('sweep', 'img/sweep.png', 0, 0));
objects.push(new Items ('tauntaun', 'img/tauntaun.jpg', 0, 0));
objects.push(new Items ('unicorn', 'img/unicorn.jpg', 0, 0));
objects.push(new Items ('usb', 'img/usb.gif', 0, 0));
objects.push(new Items ('water-can', 'img/water-can.jpg', 0, 0));
objects.push(new Items ('wine-glass', 'img/wine-glass.jpg', 0, 0));

// run functions
groupFunctions();
