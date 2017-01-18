'use strict';

// global variables
var images = [];
var objects = [];
var divOne = document.getElementById('image-one');
var divTwo = document.getElementById('image-two');
var divThree = document.getElementById('image-three');
var threeNumbers = [];

// object constructor
function Items (name, timesShown, timesClicked, id){
  this.name = name;
  this.timesShown = timesShown;
  this.timesClicked = timesClicked;
  this.id = id;
};

// pictures
var bagPic = new Image();
bagPic.src = 'img/bag.jpg';
images.push(bagPic);
var bananaPic = new Image();
bananaPic.src = 'img/banana.jpg';
images.push(bananaPic);
var bathroomPic = new Image();
bathroomPic.src = 'img/bathroom.jpg';
images.push(bathroomPic);
var bootsPic = new Image();
bootsPic.src = 'img/boots.jpg';
images.push(bootsPic);
var breakfastPic = new Image();
breakfastPic.src = 'img/breakfast.jpg';
images.push(breakfastPic);
var bubblegumPic = new Image();
bubblegumPic.src = 'img/bubblegum.jpg';
images.push(bubblegumPic);
var chairPic = new Image();
chairPic.src = 'img/chair.jpg';
images.push(chairPic);
var cthulhuPic = new Image();
cthulhuPic.src = 'img/cthulhu.jpg';
images.push(cthulhuPic);
var dogDuckPic = new Image();
dogDuckPic.src = 'img/dog-duck.jpg';
images.push(dogDuckPic);
var dragonPic = new Image();
dragonPic.src = 'img/dragon.jpg';
images.push(dragonPic);
var penPic = new Image();
penPic.src = 'img/pen.jpg';
images.push(penPic);
var petSweepPic = new Image();
petSweepPic.src = 'img/pet-sweep.jpg';
images.push(petSweepPic);
var scissorsPic = new Image();
scissorsPic.src = 'img/scissors.jpg';
images.push(scissorsPic);
var sharkPic = new Image();
sharkPic.src = 'img/shark.jpg';
images.push(sharkPic);
var sweepPic = new Image();
sweepPic.src = 'img/sweep.png';
images.push(sweepPic);
var tauntaunPic = new Image();
tauntaunPic.src = 'img/tauntaun.jpg';
images.push(tauntaunPic);
var unicornPic = new Image();
unicornPic.src = 'img/unicorn.jpg';
images.push(unicornPic);
var usbPic = new Image();
usbPic.src = 'img/usb.gif';
images.push(usbPic);
var waterCanPic = new Image();
waterCanPic.src = 'img/water-can.jpg';
images.push(waterCanPic);
var wineGlassPic = new Image();
wineGlassPic.src = 'img/wine-glass.jpg';
images.push(wineGlassPic);

// objects
var bag = new Items('bag', 0, 0, 'Bag');
objects.push(bag);
console.log(objects);

// loop to show three random pictures
for (var i = 0; i < 3; i++) {
  var randomNumber = Math.floor(Math.random() * 20);
  threeNumbers.push(randomNumber);
}

images[0].onload = function () {
  divOne.appendChild(images[threeNumbers[0]]);
};
images[1].onload = function () {
  divTwo.appendChild(images[threeNumbers[1]]);
};
images[2].onload = function () {
  divThree.appendChild(images[threeNumbers[2]]);
};

console.log(threeNumbers);

console.log(images);
