import { Estado } from './estado';
import { Coordenada } from './coordenada';
import { Casilla } from "./casilla";
import { Sentido } from './sentido';
import {Barco} from './barco';

export class Mediano extends Barco{

    constructor(private tamaño:number=3,inicial:Coordenada,direccion:Sentido){
        super(tamaño,inicial,direccion);
        
    }
}