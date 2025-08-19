import { Test, TestingModule } from '@nestjs/testing';
import { CarritoPedidosController } from './carrito-pedidos.controller';
import { CarritoPedidosService } from './carrito-pedidos.service';

describe('CarritoPedidosController', () => {
  let controller: CarritoPedidosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarritoPedidosController],
      providers: [CarritoPedidosService],
    }).compile();

    controller = module.get<CarritoPedidosController>(CarritoPedidosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
