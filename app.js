'use strict';

// global variables
var objects = [];
var divOne = document.getElementById('image-one');
var divTwo = document.getElementById('image-two');
var divThree = document.getElementById('image-three');

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
  var leftProduct = objects[leftIndex];
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
  var centerProduct = objects[centerIndex];
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
  var rightProduct = objects[rightIndex];
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
    removePics();
    groupFunctions();
  }, false);
  var elRefreshTwo = document.getElementById('pictureTwo');
  elRefreshTwo.addEventListener('click', function() {
    removePics();
    groupFunctions();
  }, false);
  var elRefreshThree = document.getElementById('pictureThree');
  elRefreshThree.addEventListener('click', function() {
    removePics();
    groupFunctions();
  }, false);
}

// objects
var bag = new Items ('bag', 'img/bag.jpg', 0, 0);
objects.push(bag);
var banana = new Items ('banana', 'img/banana.jpg', 0, 0);
objects.push(banana);
var bathroom = new Items ('bathroom', 'img/bathroom.jpg', 0, 0);
objects.push(bathroom);
var boots = new Items ('boots', 'img/boots.jpg', 0, 0);
objects.push(boots);
var breakfast = new Items ('breakfast', 'img/breakfast.jpg', 0, 0);
objects.push(breakfast);
var bubblegum = new Items ('bubblegum', 'img/bubblegum.jpg', 0, 0);
objects.push(bubblegum);
var chair = new Items ('chair', 'img/chair.jpg', 0, 0);
objects.push(chair);
var cthulhu = new Items ('cthulhu', 'img/cthulhu.jpg', 0, 0);
objects.push(cthulhu);
var dogDuck = new Items ('dog-duck', 'img/dog-duck.jpg', 0, 0);
objects.push(dogDuck);
var dragon = new Items ('dragon', 'img/dragon.jpg', 0, 0);
objects.push(dragon);
var pen = new Items ('pen', 'img/pen.jpg', 0, 0);
objects.push(pen);
var petSweep = new Items ('pet-sweep', 'img/pet-sweep.jpg', 0, 0);
objects.push(petSweep);
var scissors = new Items ('scissors', 'img/scissors.jpg', 0, 0);
objects.push(scissors);
var shark = new Items ('shark', 'img/shark.jpg', 0, 0);
objects.push(shark);
var sweep = new Items ('sweep', 'img/sweep.png', 0, 0);
objects.push(sweep);
var tauntaun = new Items ('tauntaun', 'img/tauntaun.jpg', 0, 0);
objects.push(tauntaun);
var unicorn = new Items ('unicorn', 'img/unicorn.jpg', 0, 0);
objects.push(unicorn);
var usb = new Items ('usb', 'img/usb.gif', 0, 0);
objects.push(usb);
var waterCan = new Items ('water-can', 'img/water-can.jpg', 0, 0);
objects.push(waterCan);
var wineGlass = new Items ('wine-glass', 'img/wine-glass.jpg', 0, 0);
objects.push(wineGlass);

// run functions
groupFunctions();

// event listeners
