export default class Citizen {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    addAddress(address) {
        this.address = address;
    }
    getDetails() {
        console.log(`Name of this resident ${this.name}, with ID no: ${this.id} residing at ${this.address}`);
    }
}
module.exports = {Citizen}
