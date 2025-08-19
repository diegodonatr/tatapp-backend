import { PartialType } from '@nestjs/mapped-types';
import { CreateCarritoPedidoDto } from './carrito.resumen.dto ';

export class UpdateCarritoPedidoDto extends PartialType(CreateCarritoPedidoDto) {}
