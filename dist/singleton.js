"use strict";
var Display = /** @class */ (function () {
    function Display() {
        this._name = 'base';
    }
    Display.getSingleton = function () {
        if (this.singletonInstance == undefined) {
            this.singletonInstance = new Display();
        }
        return this.singletonInstance;
    };
    Display.prototype.getName = function () {
        return this._name;
    };
    Display.prototype.setName = function (value) {
        this._name = value;
    };
    return Display;
}());
var dsp = Display.getSingleton();
var sps = Display.getSingleton();
dsp.setName('digdug');
console.log(dsp.getName());
console.log(sps.getName());
//# sourceMappingURL=singleton.js.map