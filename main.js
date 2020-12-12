var car = document.querySelector('img');

var carDirectionData = {
  north: 'north',
  south: 'south',
  west: 'west',
  east: 'east'
}

function turnCar(event) {

  if (event.code === "ArrowUp") {
    car.classList.add('north');
  }else if (event.code === "ArrowDown") {
    car.classList.add('south');
  }else if (event.code === "ArrowLeft") {
    car.classList.add('west');
  }else if (event.code === "ArrowRight") {
    car.classList.add("east");
  }else{
    return;
  }
  console.log(event);
}


document.addEventListener('keydown', turnCar);
