"use strict";
/*Es la clase
que contiene todos los barcos
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flota = void 0;
var generadorFlota_1 = require("./generadorFlota");
var Flota = /** @class */ (function () {
    function Flota(pequeño, mediano, grande) {
        this.pequeño = pequeño;
        this.mediano = mediano;
        this.grande = grande;
        var flotaGenerada = new generadorFlota_1.GeneradorFlota(pequeño, mediano, grande);
        this._barcos = flotaGenerada.barcos;
    }
    return Flota;
}());
exports.Flota = Flota;
//# sourceMappingURL=flota.js.map