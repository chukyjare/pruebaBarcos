/*Es la clase
que contiene todos los barcos 
*/

import {Barco} from './barco';
import { Pequeño } from './pequeño';
import { Mediano } from './mediano';
import { Grande } from './grande';
import { GeneradorFlota } from './generadorFlota';

export class Flota{
  private _barcos: Barco[];
    constructor(private pequeño: Pequeño, private mediano: Mediano, private grande: Grande){
      let flotaGenerada= new GeneradorFlota(pequeño,mediano,grande);
      this._barcos=flotaGenerada.barcos;
    }
}