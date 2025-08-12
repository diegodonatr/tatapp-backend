import { areasEquipo } from "../enum/areas-equipo.enum";
import { Integrante } from "./integrante.entity";

export class Equipo {
    constructor(
        public nombreEquipo: string,
        public areasEquipo: areasEquipo[],
        public integrante: Integrante[],
        public lideres: Integrante[]
    ){}
}
