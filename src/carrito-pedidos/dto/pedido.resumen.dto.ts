export class PedidoResumenDTO {
    pedidoId: string;
    fecha: string;
    total: number;
    estado: 'CREADO' | 'PAGADO' | 'CANCELADO' | 'ENTREGADO';
}