interface Mediator {
    notify(sender: object, event: string): void;
}

class ConcreteMediator implements Mediator {
    private component: Component;
    private component2: Component;

    constructor(component: Component, component2: Component2) {
        this.component = component;
        this.component.setMediator(this);

        this.component2 = component2;
        this.component2.setMediator(this)
    }

    public notify(sender: object, event: string): void {
        if(event === "Action") {
            console.log('Listening Component Action 1');
        }
        if(event === "Action2") {
            console.log('Listening Component Action 2');
        }
    }
}

class BaseComponent {
    protected mediator: Mediator;

    constructor(mediator?: Mediator) {
        this.mediator = mediator!;
    }

    public setMediator(mediator: Mediator): void {
        this.mediator = mediator;
    }
}

class Component extends BaseComponent {
    public action(): void {
        console.log("Component Action 1")
        this.mediator.notify(this, "Action")
    }
}

class Component2 extends BaseComponent {
    public action(): void {
        console.log("Component Action 2")
        this.mediator.notify(this, "Action2")
    }
}

const component = new Component();
const component2 = new Component2();
const mediator = new ConcreteMediator(component, component2);

component.action();
component2.action();

