class BMW {
    model: string;
    price: number;
    maxSpeed: number;

    constructor(model: string, price: number, maxSpeed: number) {
        this.model = model;
        this.price = price;
        this.maxSpeed = maxSpeed;
    }
}

class BMWFactory {
    create(type: string) {
        if(type === "X5") {
            return new BMW(type, 10000, 280)
        }
        if(type === "X6") {
            return new BMW(type, 15000, 320)
        }
    }
}

const factory = new BMWFactory();

const x5 = factory.create("X5");
console.log(x5)

const x6 = factory.create("X6");
console.log(x6)