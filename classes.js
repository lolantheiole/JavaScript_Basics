export default class Vehicle {

    constructor(make, name, engine) {
        this.make = make;
        this.name = name;
        this.engine = engine;
    }
    getName() {
        return (`The name of the vehicle is ${this.name}`)
    }
}
