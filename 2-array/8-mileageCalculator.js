const cars = [
  { make: "Toyota", model: "Camry", year: 2020, mileage: 30800.22 },
  { make: "Honda", model: "Civic", year: 2019, mileage: 32000.12 },
  { make: "Chevrolet", model: "Impala", year: 2021, mileage: 17500 },
  { make: "Audi", model: "R8", year: 2020, mileage: 13000 },
  { make: "Tesla", model: "Model 3", year: 2018, mileage: 50000 },
];

/////// Avg mileage
//  Method-1
function avgMilage(cars) {
  const noOfCars = cars.length;
  let sum = 0;
  for (let car in cars) {
    sum += cars[car].mileage;
  }
  return sum / noOfCars;
}
// Method-2
function avgMilage1(cars) {
  const totalMileage = cars.reduce((avg, car) => avg + car.mileage, 0);
  return totalMileage / cars.length;
}

/////// Heigest and lowest mileage

function heigestMileage(cars) {
  let heigest = 0;
  let lowest = cars[0].mileage;
  let heigestMileageCar;
  const totalMileage = cars.reduce((avg, car) => avg + car.mileage, 0);
  const avgMileage = totalMileage / cars.length;
  for (let car in cars) {
    if (cars[car].mileage > heigest) {
      heigest = cars[car].mileage;
      heigestMileageCar = cars[car];
    }
  }
  for (let car in cars) {
    if (cars[car].mileage < lowest) {
      lowest = cars[car].mileage;
    }
  }

  return { lowest, heigest, heigestMileageCar, avgMileage };
}

console.log(heigestMileage(cars));
