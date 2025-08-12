import { Injectable } from '@nestjs/common';
import { CreateEquipoDto } from './dto/create-equipo.dto';
import { UpdateEquipoDto } from './dto/update-equipo.dto';
import { areasEquipo } from './enum/areas-equipo.enum';
import { Integrante } from './entities/integrante.entity';

@Injectable()
export class EquipoService {
  integrantes: Integrante[] = [];

  constructor(){
    const integrante1 = new Integrante(
      '187212936',
      'Diego Donat',
      areasEquipo.BACKEND,
      false
    );
    this.integrantes.push(integrante1);
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
