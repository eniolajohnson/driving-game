var car = document.querySelector('img');

var carDirectionData = {
  direction: 'east',
  location: {
    x: 0,
    y: 0
  },
  start: false
}

var left = 8;
var topNum = 8;

var intervalId = null;
var intervalId2 = null;
var intervalId3 = null;
var intervalId4 = null;

function carMove(e) {
  if (e.code === "ArrowUp") {
    car.className = 'north';
    carDirectionData.direction = 'north';
  } else if (e.code === "ArrowDown") {
    car.className = 'south';
    carDirectionData.direction = 'south';
  } else if (e.code === "ArrowLeft") {
    car.className = 'west';
    carDirectionData.direction = 'west';
  } else if (e.code === "ArrowRight") {
    car.className = "east";
    carDirectionData.direction = 'east';
  }
}

document.addEventListener('keydown', carMove);

function playGame(e){
  if (e.code === "Space" && carDirectionData.start === false) {
     intervalId = setInterval(() => {
      carDirectionData.start = true;
      left += 16;
      car.style.left = left + 'px';
      carDirectionData.location.x = left;
    }, 50);
  } else if (e.code === 'Space' && carDirectionData.start === true){
    clearInterval(intervalId);
    clearInterval(intervalId2);
    clearInterval(intervalId3);
    clearInterval(intervalId4);
    carDirectionData.start = false;
  }
  if (e.code === 'ArrowDown') {
    clearInterval(intervalId);
    clearInterval(intervalId4);
    clearInterval(intervalId3);
    intervalId2 = setInterval(() => {
      carDirectionData.start = true;
      topNum += 16;
      car.style.top = topNum + 'px';
      carDirectionData.location.y = topNum;
    }, 50);
  }
  if (e.code === 'ArrowRight') {
    clearInterval(intervalId4);
    clearInterval(intervalId2);
    clearInterval(intervalId3);
    intervalId = setInterval(() => {
      carDirectionData.start = true;
      left += 16;
      car.style.left = left + 'px';
      carDirectionData.location.x = left;
    }, 50);
  }
  if (e.code === 'ArrowUp') {
    clearInterval(intervalId);
    clearInterval(intervalId2);
    clearInterval(intervalId4);
    intervalId3 = setInterval(() => {
      carDirectionData.start = true;
      topNum-= 16;
      car.style.top = topNum + 'px';
      carDirectionData.location.y = topNum;
    }, 50);
  }
  if (e.code === 'ArrowLeft') {
    clearInterval(intervalId);
    clearInterval(intervalId2);
    clearInterval(intervalId3);
    intervalId4 = setInterval(() => {
      carDirectionData.start = true;
      left -= 16;
      car.style.left = left + 'px';
      carDirectionData.location.x = left;
    }, 50);
  }
}

document.addEventListener('keydown', playGame);
