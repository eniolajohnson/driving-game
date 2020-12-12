var car = document.querySelector('img');

var carDirectionData = {
  north: 'north',
  south: 'south',
  west: 'west',
  east: 'east'
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
  } else {
    return;
  }
}


document.addEventListener('keydown', turnCar);
