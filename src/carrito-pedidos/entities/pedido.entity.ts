import { Usuario } from "./usuario.entity";

export class Pedido {
    constructor(
        public idPedido: string,
        public idUsuario: Usuario,
        public estado: 'CREADO'|'PAGADO'|'CANCELADO'|'ENTREGADO',
        public creadoEn: Date,

    ) { }
}