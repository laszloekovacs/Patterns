interface Observer {
    update():void;
}

class Observable {
    private observers: Observer[] = [];

    public addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    public removeObserver(observer: Observer): void {
        let removeIndex = this.observers.indexOf(observer);
        this.observers.splice(removeIndex,1);
    }

    public notifyObservers(): void {
        this.observers.forEach(element => {
            element.update();
        });
    }
}

class TempSensor extends Observable {
    private temperature: number = 0;
    
    public changeWeather(temp: number = 1) {
        this.temperature += temp;
        this.notifyObservers();
    }

    public getTemperature(): number {
        return this.temperature;
    }
}

class TempDisplay implements Observer {

    private subject: TempSensor;

    constructor(observed: TempSensor) {
        this.subject = observed;
        observed.addObserver(this);
    }

    update(): void {
        console.log('the weather has changed, current temp is: ' + this.subject.getTemperature());
    }
}

let sensor = new TempSensor();
let display = new TempDisplay(sensor);

sensor.changeWeather(8);
