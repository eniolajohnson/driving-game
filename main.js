var car = document.querySelector('img');

var carDirectionData = {
  directionTop: 'north',
  directionBottom: 'south',
  directionLeft: 'west',
  directionRight: 'east'
}

function turnCar(event) {
  if (event.code === "ArrowUp") {
    car.className = 'north';
  } else if (event.code === "ArrowDown") {
    car.className = 'south';
  } else if (event.code === "ArrowLeft") {
    car.className = 'west';
  } else if (event.code === "ArrowRight") {
    car.className = "east";
  }
}


document.addEventListener('keydown', turnCar);
