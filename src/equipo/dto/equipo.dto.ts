import { Integrante } from "../entities/integrante.entity";
import { areasEquipo } from "../enum/areas-equipo.enum";
import { IntegrantesPorAreaDTO } from "./integrantes-area.dto";

export class InformacionEquipoDTO {
    nombre: string;
    areas: areasEquipo[];
    integrantes: IntegrantesPorAreaDTO;
    lideres: Integrante[];
}
