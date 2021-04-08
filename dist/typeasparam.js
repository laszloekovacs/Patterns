"use strict";
var Part = /** @class */ (function () {
    function Part() {
    }
    Part.prototype.getName = function () {
        return 'hello';
    };
    return Part;
}());
function typeasparam(proto) {
    var result = new Object();
    Reflect.setPrototypeOf(result, Reflect.getPrototypeOf(proto));
    return result;
}
var giffy = typeasparam(new Part());
if (giffy instanceof Part) {
    console.log('works');
}
//# sourceMappingURL=typeasparam.js.map