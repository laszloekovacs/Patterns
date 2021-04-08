
abstract class Car {
    abstract getDescription(): string;
    abstract getPrice(): number;
}


class CaravanCar extends Car {
    public getDescription():string {
        return 'dodge caravan';
    }

    public getPrice(): number {
        return 1000;
    }
}

class SportsCar extends Car {
    public getDescription(): string {
        return 'trans am';
    }

    public getPrice(): number {
        return 2000;
    }
}

abstract class CarOption extends Car {
    public vehicle: Car;
    
    constructor(v: Car) {
        super();
        this.vehicle = v;
    }

    abstract getDescription(): string;
    abstract getPrice(): number;
}


class PoweredWindows extends CarOption {

    getDescription(): string {
        return this.vehicle.getDescription() + ' ,powered windows';
    }
    getPrice(): number {
        return this.vehicle.getPrice() + 450;
    }
}

class DiscBrakes extends CarOption {
    public getDescription(): string {
        return this.vehicle.getDescription() + ' ,disc brakes';
    }
    public getPrice(): number {
        return this.vehicle.getPrice() + 300;
    }
}


let myCar: Car = new SportsCar();

myCar = new DiscBrakes(myCar);
myCar = new PoweredWindows(myCar);

console.log(myCar.getDescription());
console.log(myCar.getPrice());

