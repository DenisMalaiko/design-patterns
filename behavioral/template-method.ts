class TemplateMethod {
    public build() {
        this.createUser();
        this.addName();
        this.addAge();
    }

    createUser() {
        console.log("Create User")
    }
    addName() {}
    addAge() {}
}

class Den extends TemplateMethod {
    addName() {
        console.log("Den")
    }

    addAge() {
        console.log("25")
    }
}

class Oscar extends TemplateMethod {
    addName() {
        console.log("Oscar")
    }

    addAge() {
        console.log("28")
    }
}

const den = new Den();
den.build()

const oscar = new Oscar()
oscar.build()