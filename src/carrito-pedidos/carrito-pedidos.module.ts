import { Module } from '@nestjs/common';
import { CarritoPedidosService } from './carrito-pedidos.service';
import { CarritoPedidosController } from './carrito-pedidos.controller';

@Module({
  controllers: [CarritoPedidosController],
  providers: [CarritoPedidosService],
})
export class CarritoPedidosModule {}
