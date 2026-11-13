class Car {
    constructor (brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    
    describe(){
        return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`
    }
}

const myCar = new Car("Toyota", "Camry", 2024);
const yourCar = new Car("Honda", "Civic", 2023);

console.log(myCar.describe());
console.log(yourCar.describe());