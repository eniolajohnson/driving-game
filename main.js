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
      if (carDirectionData.direction === "east"){
        left += 16;
        car.style.left = left + 'px';
        carDirectionData.location.x = left;
      } else if (carDirectionData.direction === "south"){
        topNum += 16;
        car.style.top = topNum + 'px';
        carDirectionData.location.y = topNum;
        carDirectionData.location.x = left;
      } else if (carDirectionData.direction === "north") {
        topNum -= 16;
        car.style.top = topNum + 'px';
        carDirectionData.location.y = topNum;
        carDirectionData.location.x = left;
      } else if (carDirectionData.direction === "west") {
        left -= 16;
        car.style.left = left + 'px';
        carDirectionData.location.y = topNum;
        carDirectionData.location.x = left;
      }
    }, 50);
  } else if (e.code === 'Space' && carDirectionData.start === true){
    clearInterval(intervalId);
    carDirectionData.start = false;
  }
}

document.addEventListener('keydown', playGame);
