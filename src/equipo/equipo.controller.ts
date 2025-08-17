import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EquipoService } from './equipo.service';
import { areasEquipo } from './enum/areas-equipo.enum';
import { Integrante } from './entities/integrante.entity';
import { Equipo } from './entities/equipo.entity';
import { EquipoDto } from './dto/equipo.dto';
import { EquipoPryectoDto } from './dto/resumen.proyecto.dto';

@Controller('equipo')
export class EquipoController {
  constructor(private readonly equipoService: EquipoService) { }
  //Informacion equipo
  @Get(`informacion`)
  getInfoEquipo(): EquipoPryectoDto{
    return this.equipoService.getInformacionEquipo()
  }

  //Filtrar integrantes segun su area, indicando quien es el lider de dicha area
  @Get('integrante/area/:area')
  getIntegrantesArea(@Param('area') area: string) {
    return this.equipoService.getIntegrantesArea(area as areasEquipo);
  }
  //Conseguir todos los integrantes del equipo, indicando si es lider o no
  @Get(`integrantes`)
  getTodosLosIntegrantes(): Integrante[] {
    return this.equipoService.getTodosLosIntegrantes();
  }
  //De acuerdo con un rut, retornar el integrante al que corresponde
  @Get(`integrante/:rut`)
  getFiltrarPorRut(@Param("rut") rut: string): Integrante {
    return this.equipoService.GetfiltrarPorRut(rut);
  }

  //Lista de cada area con su respectivo integrante
  @Get(`integrante-por-area`)
  getListaArea() {
    return this.equipoService.getIntegrantesPorArea();
  }

  //Informacion del E-Commerce /nombre, descrpción, tipo y objetivos)
  @Get('ecommerce')
  getEcommerce(): string {
    return this.equipoService.getEcommerce();
  }
}