import { Controller, Get, Post, Body, Patch, Param, Delete, ParseEnumPipe } from '@nestjs/common';
import { EquipoService } from './equipo.service';
import { areasEquipo } from './enum/areas-equipo.enum';
import { Integrante } from './entities/integrante.entity';
import { InformacionEquipoDTO } from './dto/equipo.dto';
import { EcommerceDto } from './dto/ecommerce.dto';

@Controller('equipo')
export class EquipoController {
  constructor(private readonly equipoService: EquipoService) { }
  //Informacion equipo
  @Get('informacion')
  getInfoEquipo(): InformacionEquipoDTO {
    return this.equipoService.getInformacionEquipo()
  }

  //Filtrar integrantes segun su area, indicando quien es el lider de dicha area
  @Get('integrantes/area/:area')
  getIntegrantesArea(@Param('area', new ParseEnumPipe(areasEquipo)) area: areasEquipo) {
    return this.equipoService.getIntegrantesArea(area as areasEquipo);
  }
  //Conseguir todos los integrantes del equipo, indicando si es lider o no
  @Get(`integrantes`)
  getTodosLosIntegrantes(): Integrante[] {
    return this.equipoService.getTodosLosIntegrantes();
  }
  //De acuerdo con un rut, retornar el integrante al que corresponde
  @Get(`integrantes/:rut`)
  getFiltrarPorRut(@Param("rut") rut: string): Integrante {
    return this.equipoService.GetFiltrarPorRut(rut);
  }

  //Lista de cada area con su respectivo integrante
  @Get(`integrante-por-area`)
  getListaArea() {
    return this.equipoService.getIntegrantesPorArea();
  }

  //Informacion del E-Commerce /nombre, descrpción, tipo y objetivos)
  @Get('ecommerce')
  getEcommerce(): EcommerceDto {
    return this.equipoService.getEcommerce();
  }
}