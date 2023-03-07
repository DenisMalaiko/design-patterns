class Engine2 {
    simple() {
        console.log('Engine 2')
    }
}

class Engine8 {
    hard() {
        console.log('Engine 8')
    }
}

class EngineV8Adapter {
    engine;

    constructor(engine: any) {
        this.engine = engine;
    }

    simple() {
        this.engine.hard()
    }
}

class Auto {
    startEngine(engine: any) {
        engine.simple()
    }
}

const myCar = new Auto();
const oldEngine = new Engine2();

myCar.startEngine(oldEngine);

const myCar2 = new Auto();
const engineAdapter = new EngineV8Adapter(new Engine8());

myCar2.startEngine(engineAdapter)


