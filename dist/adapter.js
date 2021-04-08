"use strict";
var GooglePixel = /** @class */ (function () {
    function GooglePixel() {
    }
    GooglePixel.prototype.useMicroUSB = function () {
        console.log('google phone charging');
    };
    return GooglePixel;
}());
var MicroUSBtoLightingAdapter = /** @class */ (function () {
    function MicroUSBtoLightingAdapter(adapted) {
        this._adapted = adapted;
    }
    MicroUSBtoLightingAdapter.prototype.useLighting = function () {
        console.log('converting');
        this._adapted.useMicroUSB();
    };
    return MicroUSBtoLightingAdapter;
}());
var AppleCharger = /** @class */ (function () {
    function AppleCharger() {
    }
    AppleCharger.charge = function (phone) {
        console.log('apple charger started');
        phone.useLighting();
    };
    return AppleCharger;
}());
var myphone = new MicroUSBtoLightingAdapter(new GooglePixel());
AppleCharger.charge(myphone);
//# sourceMappingURL=adapter.js.map