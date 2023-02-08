class Facade {
    protected subsystem: Subsystem;
    protected subsystem2: Subsystem2;

    constructor(subsystem?: Subsystem, subsystem2?: Subsystem2) {
        this.subsystem = subsystem  || new Subsystem();
        this.subsystem2 = subsystem2 || new Subsystem2();
    }

    operation() {
        const result: string = `
            Subsystem result:
            ${this.subsystem.plus(10, 5)}
            ----------------
            Subsystem 2 result:
            ${this.subsystem2.minus(10, 5)}
        `

        return result;
    }
}

class Subsystem {
    public plus(a: number, b: number) {
        return a + b;
    }
}

class Subsystem2 {
    public minus(a: number, b: number) {
        return a - b;
    }
}

const subsystem = new Subsystem();
const subsystem2 = new Subsystem2();
const facade = new Facade(subsystem, subsystem2);

console.log(facade.operation())