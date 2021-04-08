"use strict";
// the factory should return various subclasses of procudts
//kind of like document.createElement
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
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());
var Ship = /** @class */ (function (_super) {
    __extends(Ship, _super);
    function Ship() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ship.prototype.getName = function () {
        return 'its a transport ship';
    };
    return Ship;
}(Product));
var Lorry = /** @class */ (function (_super) {
    __extends(Lorry, _super);
    function Lorry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Lorry.prototype.getName = function () {
        return 'truck';
    };
    return Lorry;
}(Product));
var ProductFactory = /** @class */ (function () {
    function ProductFactory() {
    }
    ProductFactory.getProduct = function (productName) {
        switch (productName.toLowerCase()) {
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
    };
    return ProductFactory;
}());
var mySupplier = ProductFactory.getProduct('truck');
console.log(mySupplier.getName());
//# sourceMappingURL=factory.js.map