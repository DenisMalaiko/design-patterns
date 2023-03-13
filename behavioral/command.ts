class Driver {
    command: any;

    constructor(command: any) {
        this.command = command;
    }

    execute() {
        this.command.execute()
    }
}

class Engine {
    state: boolean;

    constructor() {
        this.state = false;
    }

    on() {
        this.state = true;
    }
}

class OnStartCommand {
    engine: Engine;
    constructor(engine: Engine) {
        this.engine = engine;
    }

    execute() {
        this.engine.on();
    }
}

const engine = new Engine();
console.log(engine);

const onStartCommand = new OnStartCommand(engine);

const driver = new Driver(onStartCommand);
driver.execute();

console.log(engine)