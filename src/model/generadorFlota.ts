// Generar una serie de barcos que no se solapan
// y que sortean la posicion inicial de cada barco
//y el sentido en que crecen
// Ademas el array de barcos creado asegura que ninguno se ha 
// solapado.
//Necesita conocer la posicion maxima a la que puede desplegar un barco
//(max fila o columna)

import { Pequeño } from './pequeño';
import { Mediano } from './mediano';
import { Grande } from './grande';
import { Barco } from './barco';
import { Coordenada } from './coordenada';
import { Sentido } from './sentido';

export class GeneradorFlota {
    private pequeño: Pequeño;
    private mediano: Mediano;
    private grande: Grande;
    private _barcos: Barco[] = [];

    /**
     * Getter barcos
     * @return {Barco[] }
     */
    public get barcos(): Barco[] {
        return this._barcos;
    }


    constructor(pequeño: Pequeño, mediano: Mediano, grande: Grande) {
        this.pequeño = pequeño;
        this.mediano = mediano;
        this.grande = grande;
        this.crearFlota();
    }

    crearFlota() {
        this.crearBarcos(this.pequeño, 4);
        this.crearBarcos(this.mediano, 3);
        this.crearBarcos(this.grande, 2);
    }

    crearBarcos(barco: Barco, cantidad: number): Barco[] {
        for (let index = 0; index < cantidad; index++) {
            let coordenada: Coordenada = new Coordenada(0, 0);
            let coordenadaAleatoria: Coordenada = coordenada.obtenerCoordenadaAleatoria();
            let direccion: Sentido = this.obtenerSentidoAleatorio();
            do {
                barco = new Barco(barco.size, coordenadaAleatoria, direccion);
                barco.compruebaSolapamiento(barco.posiciones);
            } while (!barco.compruebaSolapamiento(barco.posiciones));
            this._barcos.push(barco);
        }
        return this._barcos;
    }

    obtenerSentidoAleatorio(): Sentido {
        if (Math.round(Math.random()) == 0) {
            return Sentido.abajo;
        }
        return Sentido.derecha;
    }



}