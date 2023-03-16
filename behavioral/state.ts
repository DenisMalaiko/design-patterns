class OrderStatus {
    name: string;
    nextStatus: any;

    constructor(name: string, nextStatus: any) {
        this.name = name;
        this.nextStatus = nextStatus;
    }

    next() {
        return new this.nextStatus();
    }
}

class WaitingForPayment extends OrderStatus {
    constructor() {
        super('wainingForPayment', Shipping)
    }
}

class Shipping extends OrderStatus {
    constructor() {
        super('shipping', Delivered)
    }
}

class Delivered extends OrderStatus {
    constructor() {
        super('delivered', Delivered)
    }
}

class Order {
    state: any;

    constructor() {
        this.state = new WaitingForPayment();
    }

    nextState() {
        this.state = this.state.next();
    }
}

const myOrder = new Order();
console.log(myOrder.state.name)

myOrder.nextState();
console.log(myOrder.state.name)

myOrder.nextState();
console.log(myOrder.state.name)