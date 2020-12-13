var car = document.querySelector('img');

var carDirectionData = {
  direction: 'east'
}

function turnCar(event) {
  if (event.code === "ArrowUp") {
    car.className = 'north';
    carDirectionData.direction = 'north';
  } else if (event.code === "ArrowDown") {
    car.className = 'south';
    carDirectionData.direction = 'south';
  } else if (event.code === "ArrowLeft") {
    car.className = 'west';
    carDirectionData.direction = 'west';
  } else if (event.code === "ArrowRight") {
    car.className = "east";
    carDirectionData.direction = 'east';
  }
}


document.addEventListener('keydown', turnCar);
