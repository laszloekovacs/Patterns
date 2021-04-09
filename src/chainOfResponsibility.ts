abstract class Handler {
    protected _next:Handler | null = null;

    public abstract process(input: unknown):void;
    public setNext(next: Handler):void {
        this._next = next;
    }
}

class NumberHandler extends Handler {

    public process(input: unknown): void {
        console.log('trying as number');
        
        if(typeof input == 'number'){
            console.log('input is a number' + input);
            return;
        } else {
            this._next?.process(input);
        }
    }
}

class StringHandler extends Handler {
    
    public process(input: unknown): void {
        console.log('trying as string');
        

        if(typeof input == 'string') {
            console.log('its a string ' + input);
            return;
        } else {
            this._next?.process(input);
        }
    }
}

class AnyHandler extends Handler {
    public process(input: unknown): void {
        
        console.log('couldnt handle with current config: ' + input);
        return;
    }
}

class App {

    private handlers: Handler | null = null;

    public use(handler: Handler):void {

        if(this.handlers == null){
            this.handlers = handler;
        } else {
            handler.setNext(this.handlers);
            this.handlers = handler;
        }
    }

    public process(input: unknown):void {
        this.handlers?.process(input);
    }
}


const app = new App();
app.use(new AnyHandler());
app.use(new StringHandler());
app.use(new NumberHandler());
app.process('2');