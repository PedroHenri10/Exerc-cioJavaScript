/*
## Objects #6

1. create car object
2. add make, model, year, colors (arrays) hybrid (boolean), keys
3. add two methods drive and stop
4. in the function body setup log with random text
5. log make
6. log first color
7. involke both methods
*/

const car = {
  make: "Jeep",
  model: "Renegade",
  year: 2020,
  colors: ["blue", "black", "white", "gray", "red", "green"],
  hybrid: true,
  drive: function () {
    console.log("Driving...");
  }, 
  stop() {
    console.log("Stopped");
  }, 
}

console.log(car.make);
console.log(car.colors[0]);
car.drive();
car.stop():
