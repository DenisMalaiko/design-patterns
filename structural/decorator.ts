class Car {
    price: number;
    model: string

    constructor() {
        this.price = 10000;
        this.model = "Car";
    }

    getPrice() {
        return this.price;
    }

    getModel() {
        return this.model;
    }
}

class Tesla extends Car {
    constructor() {
        super();
        this.price = 12000;
        this.model = "Tesla";
    }
}

// Decorators
class Autopilot {
    car;
    constructor(car: Car) {
        this.car = car;
    }

    getPrice() {
        return this.car.getPrice() + 5000;
    }

    getModel() {
        return `${this.car.model} with autopilot`;
    }
}

class Parktronic {
    car;
    constructor(car: Car) {
        this.car = car;
    }

    getPrice() {
        return this.car.getPrice() + 3000;
    }

    getModel() {
        return `${this.car.model} with parktronic`
    }
}

let tesla: any = new Tesla();
console.log(tesla.getPrice(), tesla.getModel())

tesla = new Autopilot(tesla);
console.log(tesla.getPrice(), tesla.getModel());

tesla = new Parktronic(tesla)
console.log(tesla.getPrice(), tesla.getModel());