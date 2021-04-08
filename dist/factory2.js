"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Element = /** @class */ (function () {
    function Element() {
    }
    Element.prototype.getTypeName = function () {
        return 'element';
    };
    return Element;
}());
var FormElement = /** @class */ (function (_super) {
    __extends(FormElement, _super);
    function FormElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormElement.prototype.getTypeName = function () {
        return 'FormElement';
    };
    return FormElement;
}(Element));
var ActionElement = /** @class */ (function (_super) {
    __extends(ActionElement, _super);
    function ActionElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ActionElement.prototype.getTypeName = function () {
        return 'ActionElement';
    };
    return ActionElement;
}(Element));
var Document = /** @class */ (function () {
    function Document() {
        this.elements = new Map();
    }
    Document.prototype.registerElement = function (tag, elem) {
        this.elements.set(tag.toLowerCase(), elem);
        console.log('extended document with ' + tag + ' element');
    };
    Document.prototype.createElement = function (tag) {
        return this.elements.get(tag.toLowerCase());
    };
    return Document;
}());
var document = new Document();
document.registerElement('FormElement', new FormElement());
document.registerElement('ActionElement', new ActionElement());
var elem = document.createElement('FormElement');
console.log(elem === null || elem === void 0 ? void 0 : elem.getTypeName());
//# sourceMappingURL=factory2.js.map