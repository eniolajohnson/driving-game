var car = document.querySelector('img');

var carDirectionData = {
  direction: 'east',
  location: {
    x: 0,
    y: 0
  }
}

var left = 0;

var intervalId = null;

function playGame(e) {
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
  if (e.code === "Space"){
    var intervalId = setInterval(() => {
      left += 16;
      car.style.left = left + 'px';
      carDirectionData.location.x = left;
    }, 30)
  }
}

document.addEventListener('keydown', playGame);
