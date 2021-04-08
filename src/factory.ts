// the factory should return various subclasses of procudts
//kind of like document.createElement

abstract class Product {
    public abstract getName(): string;
}


class Ship extends Product {
    public getName(): string {
        return 'its a transport ship';
    }
}


class Lorry extends Product {
    public getName(): string {
        return 'truck';
    }
}


class ProductFactory {

    public static getProduct(productName: string) : Product {
 
        switch(productName.toLowerCase()) {
            case 'truck':
                return new Lorry();
                break;
            case 'ship': 
                return new Ship();
                break;
            default: 
                return new Ship();
                break;
        }
    } 
}


let mySupplier = ProductFactory.getProduct('truck');
console.log(mySupplier.getName());