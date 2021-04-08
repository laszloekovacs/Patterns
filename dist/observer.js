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
var Observable = /** @class */ (function () {
    function Observable() {
        this.observers = [];
    }
    Observable.prototype.addObserver = function (observer) {
        this.observers.push(observer);
    };
    Observable.prototype.removeObserver = function (observer) {
        var removeIndex = this.observers.indexOf(observer);
        this.observers.splice(removeIndex, 1);
    };
    Observable.prototype.notifyObservers = function () {
        this.observers.forEach(function (element) {
            element.update();
        });
    };
    return Observable;
}());
var TempSensor = /** @class */ (function (_super) {
    __extends(TempSensor, _super);
    function TempSensor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.temperature = 0;
        return _this;
    }
    TempSensor.prototype.changeWeather = function (temp) {
        if (temp === void 0) { temp = 1; }
        this.temperature += temp;
        this.notifyObservers();
    };
    TempSensor.prototype.getTemperature = function () {
        return this.temperature;
    };
    return TempSensor;
}(Observable));
var TempDisplay = /** @class */ (function () {
    function TempDisplay(observed) {
        this.subject = observed;
        observed.addObserver(this);
    }
    TempDisplay.prototype.update = function () {
        console.log('the weather has changed, current temp is: ' + this.subject.getTemperature());
    };
    return TempDisplay;
}());
var sensor = new TempSensor();
var display = new TempDisplay(sensor);
sensor.changeWeather(8);
//# sourceMappingURL=observer.js.map