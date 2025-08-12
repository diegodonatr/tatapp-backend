import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EquipoService } from './equipo.service';
import { CreateEquipoDto } from './dto/create-equipo.dto';
import { UpdateEquipoDto } from './dto/update-equipo.dto';
import { areasEquipo } from './enum/areas-equipo.enum';
import { Integrante } from './entities/integrante.entity';

@Controller('equipo')
export class EquipoController {
  constructor(private readonly equipoService: EquipoService) { }
  //Filtrar integrantes segun su area, indicando quien es el lider de dicha area
  @Get('area')
  getIntegrantesArea(@Param('area') area: areasEquipo) {
    return this.equipoService.getIntegrantesArea(area);
  }
  //Conseguir todos los integrantes del equipo, indicando si es lider o no
  @Get(`integrantes`)
  getTodosLosIntegrantes(): Integrante[] {
    return this.equipoService.getTodosLosIntegrantes();
  }

  //De acuerdo con un rut, retornar el integrante al que corresponde


  //Lista de cada area con su respectivo integrante


  //Informacion del E-Commerce /nombre, descrpción, tipo y objetivos)
  @Post()
  create(@Body() createEquipoDto: CreateEquipoDto) {
    return this.equipoService.create(createEquipoDto);
  }

  @Get()
  findAll() {
    return this.equipoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.equipoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEquipoDto: UpdateEquipoDto) {
    return this.equipoService.update(+id, updateEquipoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.equipoService.remove(+id);
  }
}
