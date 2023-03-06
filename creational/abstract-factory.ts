function BMWProducer(type: string) {
    return type === 'sport' ? sportCarFactory() : familyCarFactory();
}


function sportCarFactory() {
    return new SportCar();
}

class SportCar {
    info() {
        return "Sport Car"
    }
}

const produceSportCar: any = BMWProducer('sport');
console.log(produceSportCar.info());



function familyCarFactory() {
    return new FamilyCar();
}

class FamilyCar {
    info() {
        return "Family Car";
    }
}

const produceFamilyCar: any = BMWProducer('family');
console.log(produceFamilyCar.info());