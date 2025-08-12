import { areasEquipo } from "../enum/areas-equipo.enum";

export class Integrante {
    constructor(
        public rut: string,
        public nombre: string,
        public area: areasEquipo,
        public lider: boolean
    ){}
}