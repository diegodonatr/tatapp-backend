import { Test, TestingModule } from '@nestjs/testing';
import { CarritoPedidosService } from './carrito-pedidos.service';

describe('CarritoPedidosService', () => {
  let service: CarritoPedidosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarritoPedidosService],
    }).compile();

    service = module.get<CarritoPedidosService>(CarritoPedidosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
