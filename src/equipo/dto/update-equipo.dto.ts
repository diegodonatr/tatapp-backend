import { PartialType } from '@nestjs/mapped-types';
import { EquipoDto } from './equipo.dto';

export class UpdateEquipoDto extends PartialType(EquipoDto) {}
