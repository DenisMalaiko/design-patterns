class User {
    public name: string;
    public age: number;

    constructor() {
        this.name = "";
        this.age = 0;
    }
}

class UserBuilder {
    public user: User;

    constructor() {
        this.user = new User()
    }

    setName(name: string) {
        this.user.name = name;
        return this;
    }

    setAge(age: number) {
        this.user.age = age;
        return this;
    }

    build() {
        return this.user;
    }
}

const user = new UserBuilder().setName("Den").setAge(25).build()

console.log(user)