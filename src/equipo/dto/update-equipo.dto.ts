import { PartialType } from '@nestjs/mapped-types';
import { InformacionEquipoDTO } from './equipo.dto';

export class UpdateEquipoDto extends PartialType(InformacionEquipoDTO) {}
