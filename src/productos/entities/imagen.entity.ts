import { Publicacion } from "./publicacion.entity";

export class Imagen{
    constructor(
        public id: string, 
        public publicacionId: Publicacion,
        public url: string, 
        public alto: number, 
        public ancho: number
    ) {}
}