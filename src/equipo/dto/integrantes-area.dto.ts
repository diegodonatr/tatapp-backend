import { Integrante } from "../entities/integrante.entity";
import { areasEquipo } from "../enum/areas-equipo.enum";

export class IntegrantesPorAreaDTO {
    public [areasEquipo.UX_UI]: Integrante[] = [];
    public [areasEquipo.FRONTEND]: Integrante[] = [];
    public [areasEquipo.MOBILE]: Integrante[] = [];
    public [areasEquipo.BACKEND]: Integrante[]= [];
}