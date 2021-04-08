
interface Apple {
    useLighting(): void;
}

interface Google {
    useMicroUSB(): void;
}


class GooglePixel implements Google {
    public useMicroUSB() {
        console.log('google phone charging');
    }
}

class MicroUSBtoLightingAdapter implements Apple {
    
    private _adapted;

    constructor(adapted: Google) {
        this._adapted = adapted;
    }

    useLighting():void {
        console.log('converting');
        this._adapted.useMicroUSB();
    }
}

class AppleCharger {

    public static charge(phone: Apple): void {
        console.log('apple charger started');
        
        phone.useLighting();
    }
}


const myphone = new MicroUSBtoLightingAdapter(new GooglePixel());
AppleCharger.charge(myphone);