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
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var CaravanCar = /** @class */ (function (_super) {
    __extends(CaravanCar, _super);
    function CaravanCar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CaravanCar.prototype.getDescription = function () {
        return 'dodge caravan';
    };
    CaravanCar.prototype.getPrice = function () {
        return 1000;
    };
    return CaravanCar;
}(Car));
var SportsCar = /** @class */ (function (_super) {
    __extends(SportsCar, _super);
    function SportsCar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SportsCar.prototype.getDescription = function () {
        return 'trans am';
    };
    SportsCar.prototype.getPrice = function () {
        return 2000;
    };
    return SportsCar;
}(Car));
var CarOption = /** @class */ (function (_super) {
    __extends(CarOption, _super);
    function CarOption(v) {
        var _this = _super.call(this) || this;
        _this.vehicle = v;
        return _this;
    }
    return CarOption;
}(Car));
var PoweredWindows = /** @class */ (function (_super) {
    __extends(PoweredWindows, _super);
    function PoweredWindows() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PoweredWindows.prototype.getDescription = function () {
        return this.vehicle.getDescription() + ' ,powered windows';
    };
    PoweredWindows.prototype.getPrice = function () {
        return this.vehicle.getPrice() + 450;
    };
    return PoweredWindows;
}(CarOption));
var DiscBrakes = /** @class */ (function (_super) {
    __extends(DiscBrakes, _super);
    function DiscBrakes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DiscBrakes.prototype.getDescription = function () {
        return this.vehicle.getDescription() + ' ,disc brakes';
    };
    DiscBrakes.prototype.getPrice = function () {
        return this.vehicle.getPrice() + 300;
    };
    return DiscBrakes;
}(CarOption));
var myCar = new SportsCar();
myCar = new DiscBrakes(myCar);
myCar = new PoweredWindows(myCar);
console.log(myCar.getDescription());
console.log(myCar.getPrice());
//# sourceMappingURL=decorator.js.map