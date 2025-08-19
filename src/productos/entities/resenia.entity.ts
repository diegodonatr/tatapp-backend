import { Publicacion } from "./publicacion.entity";

export class Resenia {
    constructor (
        public id: string, 
        public publicacionId: Publicacion, 
        public autor: string, 
        public puntaje: number,
        public texto: string, 
        public fecha: Date
    ){}
}