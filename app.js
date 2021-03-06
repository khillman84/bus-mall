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
var chartData = []; //display the vote totals
var dataName = JSON.parse(localStorage.newItem);

// object constructor
function Items (name, path){
  this.name = name;
  this.path = path;
  this.timesShown = 0;
  this.timesClicked = 0;
};

function Storage (clicked){
  this.clicked = clicked;
};

//methods
Storage.prototype.persistToLocalStorage = function() {
  localStorage.newItem = JSON.stringify(this);
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

function final(){
  removePics();
  displayPics();
}

function groupFunctions() {
  displayPics();
  console.log(objects);
  var elRefreshOne = document.getElementById('pictureOne');
  elRefreshOne.addEventListener('click', function() {
    leftProduct.timesClicked++;
    chartData.push(leftProduct.timesClicked);
    // var name = leftProduct.name;
    // var clicked = leftProduct.timesClicked;
    // var newItem = new Storage(name, clicked);
    // newItem.persistToLocalStorage();
    removePics();
    groupFunctions();
  }, false);
  var elRefreshTwo = document.getElementById('pictureTwo');
  elRefreshTwo.addEventListener('click', function() {
    centerProduct.timesClicked++;
    chartData.push(centerProduct.timesClicked);
    removePics();
    groupFunctions();
  }, false);
  var elRefreshThree = document.getElementById('pictureThree');
  elRefreshThree.addEventListener('click', function() {
    rightProduct.timesClicked++;
    chartData.push(rightProduct.timesClicked);
    removePics();
    groupFunctions();
  }, false);
  rounds++;
  if (rounds < 26) {
    console.log('Round number: ' + rounds);
  } else {
    final();
    var newItem = new Storage(chartData);
    newItem.persistToLocalStorage();
    console.log(newItem);
    console.log(chartNames);
    console.log(chartData);
    var context = document.getElementById('chart').getContext('2d');
    var chartInfo = chartData; //display the vote totals
    var chartNames = ['Bag', 'Banana', 'Bathroom', 'Boots', 'Breakfast', 'Bubblegum', 'Chair', 'Cthulhu', 'Dog Duck', 'Dragon', 'Pen', 'Pet Sweep', 'Scissors', 'Shark', 'Sweep', 'Tauntaun', 'Unicorn', 'USB', 'Water Can', 'Wine Glass'];
    var chartColors = ['blue', 'red', 'yellow', 'orange', 'green', 'blue', 'red', 'yellow', 'green', 'blue', 'red', 'yellow', 'orange', 'green', 'blue', 'red', 'yellow', 'green', 'blue', 'red']; //turn this into object names
    var chartOptions = {
      responsive: false,
      scales:{
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    };

    var myChart = new Chart(context, {
      type: 'bar',
      data: {
        labels: chartNames,
        datasets: [{
          label: 'Results',
          data: chartData,
          backgroundColor: chartColors
        }]
      },
      options: chartOptions
    });
  }
}

// objects
objects.push(new Items ('bag', 'img/bag.jpg'));
objects.push(new Items ('banana', 'img/banana.jpg'));
objects.push(new Items ('bathroom', 'img/bathroom.jpg'));
objects.push(new Items ('boots', 'img/boots.jpg'));
objects.push(new Items ('breakfast', 'img/breakfast.jpg'));
objects.push(new Items ('bubblegum', 'img/bubblegum.jpg'));
objects.push(new Items ('chair', 'img/chair.jpg'));
objects.push(new Items ('cthulhu', 'img/cthulhu.jpg'));
objects.push(new Items ('dog-duck', 'img/dog-duck.jpg'));
objects.push(new Items ('dragon', 'img/dragon.jpg'));
objects.push(new Items ('pen', 'img/pen.jpg'));
objects.push(new Items ('pet-sweep', 'img/pet-sweep.jpg'));
objects.push(new Items ('scissors', 'img/scissors.jpg'));
objects.push(new Items ('shark', 'img/shark.jpg'));
objects.push(new Items ('sweep', 'img/sweep.png'));
objects.push(new Items ('tauntaun', 'img/tauntaun.jpg'));
objects.push(new Items ('unicorn', 'img/unicorn.jpg'));
objects.push(new Items ('usb', 'img/usb.gif'));
objects.push(new Items ('water-can', 'img/water-can.jpg'));
objects.push(new Items ('wine-glass', 'img/wine-glass.jpg'));

// run functions
groupFunctions();
