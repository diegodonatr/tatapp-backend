import { Injectable } from '@nestjs/common';
import { CreateEquipoDto } from './dto/create-equipo.dto';
import { UpdateEquipoDto } from './dto/update-equipo.dto';
import { areasEquipo } from './enum/areas-equipo.enum';
import { Integrante } from './entities/integrante.entity';

@Injectable()
export class EquipoService {
  integrantes: Integrante[] = [];

  constructor(){
    this.integrantes = [
      new Integrante('19747126-3', 'Diego Andrés Madrid Martinez', areasEquipo.UX_UI, false),
      new Integrante('13929090-9', 'Cecilia María Melillán Furicoyán', areasEquipo.UX_UI, true),
      new Integrante('27896261-K', 'Rosa Guadalupe Quintero Abreu', areasEquipo.UX_UI, false),
      new Integrante('19846279-9', 'Fabian Esteban Herrera Villagra', areasEquipo.FRONTEND, false),
      new Integrante('17317031-9', 'Cristian Alonso Olivares Herrera', areasEquipo.FRONTEND, false),
      new Integrante('18064090-8', 'Michelle Carolina Navia Zuñiga', areasEquipo.FRONTEND, true),
      new Integrante('18721293-6', 'Diego Hernán Donat Riquelme', areasEquipo.BACKEND, false),
      new Integrante('', 'Andrés Jara', areasEquipo.BACKEND, true),
      new Integrante('20146231-2', 'Valentina Constanza Villanueva Ortiz', areasEquipo.BACKEND, false),
      new Integrante('13434211-0', 'Ermin José Volke Gaete', areasEquipo.BACKEND, false),
      new Integrante('19468722-2', 'Camilo Casanova', areasEquipo.MOBILE, true),
      new Integrante('16519431-4', 'Alejandro Leonardo Del Campo Orozco', areasEquipo.MOBILE, false)
    ]
  }

  getIntegrantesArea(area: areasEquipo): Integrante[]{
    let integrantesConsultados: Integrante[] = this.integrantes.filter((integrante) => integrante.area == area);
    let liderArea: Integrante = integrantesConsultados.find((integrante) => integrante.lider == true)!;
    console.log(`El lider del equipo es: ${liderArea}`)
    return integrantesConsultados;
  }

  create(createEquipoDto: CreateEquipoDto) {
    return 'This action adds a new equipo';
  }

  findAll() {
    return `This action returns all equipo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} equipo`;
  }

  update(id: number, updateEquipoDto: UpdateEquipoDto) {
    return `This action updates a #${id} equipo`;
  }

  remove(id: number) {
    return `This action removes a #${id} equipo`;
  }
}
