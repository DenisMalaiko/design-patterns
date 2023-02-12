class Singleton {
    private static instance: Singleton;
    public count: number = 0;

    private constructor() {
    }

    public static getInstance(): Singleton {
        if(!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }

    increaseCounter() {
        return this.count++;
    }
}

function clientCode() {
    const instance = Singleton.getInstance();
    instance.increaseCounter()
    instance.increaseCounter()

    const instance2 = Singleton.getInstance();
    instance2.increaseCounter()
    instance2.increaseCounter()

    console.log(instance)
    console.log(instance2)
}

clientCode();