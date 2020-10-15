"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pequeño = void 0;
var barco_1 = require("./barco");
var Pequeño = /** @class */ (function (_super) {
    __extends(Pequeño, _super);
    function Pequeño(tamaño, inicial, direccion) {
        if (tamaño === void 0) { tamaño = 2; }
        var _this = _super.call(this, tamaño, inicial, direccion) || this;
        _this.tamaño = tamaño;
        return _this;
    }
    return Pequeño;
}(barco_1.Barco));
exports.Pequeño = Pequeño;
//# sourceMappingURL=pequeño.js.map