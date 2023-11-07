import Vehicle from "./classes";

let jetta = new Vehicle("benz", "amg", "2020");
let bike = new Vehicle("Honda", "Civic", "2000");
let car = new Vehicle("Yaris", "Toyota", "VVT1");
let truck = new Vehicle("Mercedes", "Benz", "C63");

console.log(bike.getName());
console.log(`${bike.name} is available for purchase`);

console.log(car.getName());
console.log(`${car.name} is available for purchase`);

console.log(truck.getName());
console.log(`${truck.name} is available for purchase`);