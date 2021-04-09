
abstract class State {

    public abstract verifyPayment(): void;
    public abstract confirmShipping():void;
    public abstract deliver():void;
}


class OrderingProcess {
    
}