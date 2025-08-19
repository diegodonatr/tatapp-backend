import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarritoPedidosService } from './carrito-pedidos.service';
import { CreateCarritoPedidoDto } from './dto/carrito.resumen.dto ';
import { UpdateCarritoPedidoDto } from './dto/update-carrito-pedido.dto';
import { CarritoAgregarDTO } from './dto/agregar.carrito.dto';
import { CarritoActualizarCantidadDTO } from './dto/actualizar.carrito.dto';

@Controller('carrito-pedidos')
export class CarritoPedidosController {
  constructor(private readonly carritoPedidosService: CarritoPedidosService) { }

  ///CARRITO///
  //  Mostrar carrito
  @Get()
  getResumen() {
    return this.carritoPedidosService.getResumen();
  }

  // :Agregar publicación/servicio
  @Post('items')
  agregar(@Body() dto: CarritoAgregarDTO) {
    return this.carritoPedidosService.agregar(dto);
  }

  // Actualizar cantidad
  @Patch('items/:publicacionId')
  actualizarCantidad(
    @Param('publicacionId') publicacionId: string,
    @Body() dto: CarritoActualizarCantidadDTO,
  ) {
    return this.carritoPedidosService.actualizarCantidad(publicacionId, dto);
  }

  // Eliminar ítem
  @Delete('items/:publicacionId')
  eliminar(@Param('publicacionId') publicacionId: string) {
    return this.carritoPedidosService.eliminar(publicacionId);
  }

  // Vaciar carrito
  @Delete()
  limpiar() {
    return this.carritoPedidosService.limpiar();
  }

  ///PEDIDO///
  // HU5: Historial
  @Get()
  getPedidos() {
    return this.carritoPedidosService.getPedidos();
  }

  // HU5: Detalle
  @Get(':pedidoId')
  getPedidoDetalle(@Param('pedidoId') pedidoId: string) {
    return this.carritoPedidosService.getPedidoDetalle(pedidoId);
  }

  // HU5: Repetir pedido
  @Post(':pedidoId/reordenar')
  reordenar(@Param('pedidoId') pedidoId: string) {
    return this.carritoPedidosService.reordenar(pedidoId);
  }

}
