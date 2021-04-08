class Part {
    getName(): string {
        return 'hello';
    }
}


function typeasparam(proto: Object): Object {
    
    const result = new Object();
    Reflect.setPrototypeOf(result, Reflect.getPrototypeOf(proto));
    
    return result;
}

let giffy = typeasparam(new Part());

if(giffy instanceof Part) {
    console.log('works');
    
}
