

class Element {

    public getTypeName(): string {
        return 'element';
    }
}


class FormElement extends Element {

    public getTypeName(): string {
        return 'FormElement';
    }
}

class ActionElement extends Element {

    public getTypeName(): string {
        return 'ActionElement';
    }
}


class Document {

    private elements: Map<string, Element> = new Map<string, Element>();

    public registerElement(tag: string, elem: Element): void {
        this.elements.set(tag.toLowerCase(),elem);
        console.log('extended document with ' + tag + ' element');
    }

    public createElement(tag: string): Element | undefined {

        return this.elements.get(tag.toLowerCase());
    }
}


const document = new Document();

document.registerElement('FormElement', new FormElement());
document.registerElement('ActionElement', new ActionElement());


const elem = document.createElement('FormElement');
console.log(elem?.getTypeName());


