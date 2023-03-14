class IteratorPattern {
    list: any;
    index: number
    constructor(list: any) {
        this.list = list;
        this.index = 0;
    }

    next() {
        return this.list[this.index++]
    }

    hasNext() {
        return this.index < this.list.length;
    }
}

const collection = new IteratorPattern(["Audi","BMW","Tesla","Mersedes"]);

while (collection.hasNext()) {
    console.log(collection.next())
}