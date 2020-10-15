"use strict";
// Generar una serie de barcos que no se solapan
// y que sortean la posicion inicial de cada barco
//y el sentido en que crecen
// Ademas el array de barcos creado asegura que ninguno se ha 
// solapado.
//Necesita conocer la posicion maxima a la que puede desplegar un barco
//(max fila o columna)
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneradorFlota = void 0;
var barco_1 = require("./barco");
var coordenada_1 = require("./coordenada");
var sentido_1 = require("./sentido");
var GeneradorFlota = /** @class */ (function () {
    function GeneradorFlota(pequeño, mediano, grande) {
        this._barcos = [];
        this.pequeño = pequeño;
        this.mediano = mediano;
        this.grande = grande;
        this.crearFlota();
    }
    Object.defineProperty(GeneradorFlota.prototype, "barcos", {
        /**
         * Getter barcos
         * @return {Barco[] }
         */
        get: function () {
            return this._barcos;
        },
        enumerable: false,
        configurable: true
    });
    GeneradorFlota.prototype.crearFlota = function () {
        this.crearBarcos(this.pequeño, 4);
        this.crearBarcos(this.mediano, 3);
        this.crearBarcos(this.grande, 2);
    };
    GeneradorFlota.prototype.crearBarcos = function (barco, cantidad) {
        for (var index = 0; index < cantidad; index++) {
            var coordenada = new coordenada_1.Coordenada(0, 0);
            var coordenadaAleatoria = coordenada.obtenerCoordenadaAleatoria();
            var direccion = this.obtenerSentidoAleatorio();
            do {
                barco = new barco_1.Barco(barco.size, coordenadaAleatoria, direccion);
                barco.compruebaSolapamiento(barco.posiciones);
            } while (!barco.compruebaSolapamiento(barco.posiciones));
            this._barcos.push(barco);
        }
        return this._barcos;
    };
    GeneradorFlota.prototype.obtenerSentidoAleatorio = function () {
        if (Math.round(Math.random()) == 0) {
            return sentido_1.Sentido.abajo;
        }
        return sentido_1.Sentido.derecha;
    };
    return GeneradorFlota;
}());
exports.GeneradorFlota = GeneradorFlota;
//# sourceMappingURL=generadorFlota.js.map