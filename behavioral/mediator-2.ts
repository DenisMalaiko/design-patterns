class Mediator {
    public customers: string[];

    constructor() {
       this.customers = [];
    }

    setOrder(customer: Customer, auto: string, price: string) {
        const name = customer.getName();
        console.log(`Customer name: ${name}\nAuto: ${auto}\nPrice: ${price}\n`)
        this.setCustomer(name)
    }

    setCustomer(name: string) {
        this.customers.push(name);
    }

    getCustomersList() {
        console.log(this.customers);
    }
}

class Customer {
    public name: string;
    public mediator: Mediator;

    constructor(name: string, mediator: Mediator) {
        this.name = name;
        this.mediator = mediator;
    }

    getName() {
        return this.name;
    }

    makeOrder(auto: string, price: string) {
        this.mediator.setOrder(this, auto, price)
    }
}

const mediator = new Mediator();
const customer = new Customer("Den", mediator);
const customer2 = new Customer("Oscar", mediator);

customer.makeOrder("BMW", "10 000$")
customer2.makeOrder("Mercedes", "15 000$")

mediator.getCustomersList()