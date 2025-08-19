import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EquipoModule } from './equipo/equipo.module';
import { ProductosModule } from './productos/productos.module';

@Module({
  imports: [EquipoModule, ProductosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
