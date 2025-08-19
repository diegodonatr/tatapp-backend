import { Injectable } from '@nestjs/common';
import { CreateCarritoPedidoDto } from './dto/carrito.resumen.dto ';
import { UpdateCarritoPedidoDto } from './dto/update-carrito-pedido.dto';
import { CarritoAgregarDTO } from './dto/agregar.carrito.dto';
import { CarritoActualizarCantidadDTO } from './dto/actualizar.carrito.dto';

@Injectable()
export class CarritoPedidosService {

  ///CARRITO///
  //  Mostrar carrito (resumen)
  getResumen() {
    return 'Mostrar resumen del carrito (lista simple para revisión)';
  }

  // Agregar producto/servicio
  agregar(dto: CarritoAgregarDTO) {
    return `Agregar al carrito → publicaciónId y cantidad`;
  }

  // Actualizar cantidad
  actualizarCantidad(publicacionId: string, dto: CarritoActualizarCantidadDTO) {
    return `Actualizar cantidad → publicaciónId y nuevaCantidad`;
  }

  // Eliminar producto o seervicio
  eliminar(publicacionId: string) {
    return `Eliminar del carrito → publicaciónId=${publicacionId}`;
  }

  // Limpiar carrito
  limpiar() {
    return 'Limpiar todo el carrito';
  }

  ///PEDIDO///
  // Listar pedidos (historial)
  getPedidos() {
    return 'Listar historial de pedidos del usuario ';
  }

  // Detalle de un pedido
  getPedidoDetalle(pedidoId: string) {
    return `Mostrar detalle del pedido → pedidoId=${pedidoId}`;
  }

  //Repetir pedido (reordenar)
  reordenar(pedidoId: string) {
    return `Reordenar a partir del pedido → pedidoId=${pedidoId} (clonar al carrito)`;
  }
}
