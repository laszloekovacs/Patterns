

class Display {

    private static singletonInstance: Display;

    private _name: string = 'base';

    private constructor() {
    }

    public static getSingleton(): Display {
        if(this.singletonInstance == undefined){
            this.singletonInstance = new Display();
        }

        return this.singletonInstance;
    }

    public getName() {
        return this._name;
    }

    public setName(value: string): void {
        this._name = value;
    }
}

let dsp = Display.getSingleton();
let sps = Display.getSingleton();

dsp.setName('digdug');

console.log(dsp.getName());
console.log(sps.getName());

