import { Usuario } from "./usuario.entity";

export class Carrito {
    constructor(
        public idCarrito: string,
        public idUsuario: Usuario,
        public actualizadoEn: Date,
        public total: number
    ) {}
}
