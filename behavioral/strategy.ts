function baseStrategy(amount: any) {
    return amount;
}

function premiumStrategy(amount: any) {
    return amount * 0.85;
}

function platinumStrategy(amount: any) {
    return amount * 0.65;
}

class AutoCar {
    discount: any;
    amount: number;
    constructor(discount: any) {
        this.discount = discount;
        this.amount = 0;
    }

    checkout() {
        return this.discount(this.amount);
    }

    setAmount(amount: any) {
        this.amount = amount;
    }
}


const baseСustomer = new AutoCar(baseStrategy);
const premiumCustomer = new AutoCar(premiumStrategy);
const platinumCustomer = new AutoCar(platinumStrategy);

baseСustomer.setAmount(1000)
console.log(baseСustomer.checkout())

premiumCustomer.setAmount(1000)
console.log(premiumCustomer.checkout())

platinumCustomer.setAmount(1000)
console.log(platinumCustomer.checkout())