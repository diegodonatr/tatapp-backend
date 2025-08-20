import { Injectable, NotFoundException } from '@nestjs/common';
import { EquipoDto } from './dto/equipo.dto';
import { UpdateEquipoDto } from './dto/update-equipo.dto';
import { areasEquipo } from './enum/areas-equipo.enum';
import { Integrante } from './entities/integrante.entity';
import { Equipo } from './entities/equipo.entity';
import { EquipoProyectoDto } from './dto/resumen.proyecto.dto';
import { IntegrantesPorAreaYLiderDTO } from './dto/integrantes-area-lider.dto';
import { EcommerceDto } from './dto/ecommerce.dto';

@Injectable()
export class EquipoService {
  // Inicializar variables importantes
  integrantes: Integrante[] = [];
  equipo: Equipo;

  constructor() {
    // Crear listado de Integrantes del grupo
    this.integrantes = [
      new Integrante('19747126-3', 'Diego Andrés Madrid Martinez', areasEquipo.UX_UI, false),
      new Integrante('15206737-2', 'Juan Luis Aguilera León', areasEquipo.UX_UI, false),
      new Integrante('13929090-9', 'Cecilia María Melillán Furicoyán', areasEquipo.UX_UI, true),
      new Integrante('27896261-K', 'Rosa Guadalupe Quintero Abreu', areasEquipo.UX_UI, false),

      new Integrante('19846279-9', 'Fabian Esteban Herrera Villagra', areasEquipo.FRONTEND, false),
      new Integrante('17317031-9', 'Cristian Alonso Olivares Herrera', areasEquipo.FRONTEND, false),
      new Integrante('18064090-8', 'Michelle Carolina Navia Zuñiga', areasEquipo.FRONTEND, true),
      
      new Integrante('18721293-6', 'Diego Hernán Donat Riquelme', areasEquipo.BACKEND, true),
      new Integrante('17010245-2', 'Andrés Jara Espinoza', areasEquipo.BACKEND, false),
      new Integrante('20146231-2', 'Valentina Constanza Villanueva Ortiz', areasEquipo.BACKEND, false),
      new Integrante('13434211-0', 'Ermin José Volke Gaete', areasEquipo.BACKEND, false),
      
      new Integrante('19468722-2', 'Camilo Gabriel Casanova Gallegos', areasEquipo.MOBILE, true),
      new Integrante('16519431-4', 'Alejandro Leonardo Del Campo Orozco', areasEquipo.MOBILE, false)
    ]
    // Crear listado de lideres por área
    const lideres: Integrante[] = this.integrantes.filter(i => i.lider === true);

    // this.equipo = new Equipo(
    //   'Equipo Dante',
    //   [areasEquipo.UX_UI, areasEquipo.FRONTEND, areasEquipo.BACKEND, areasEquipo.MOBILE],
    //   this.integrantes,
    //   lideres
    // );
  }

  //1. Información del equipo
  getInformacionEquipo(): EquipoProyectoDto {
    const areasResumen: EquipoDto[] = [];

    for (const area in areasEquipo) {
      const nombreArea = areasEquipo[area];

      const integrantesArea: string[] = [];
      let lider = '';

      for (const integrante of this.equipo.integrante) {
        if (integrante.area === nombreArea) {
          integrantesArea.push(integrante.nombre);

          if (integrante.lider === true) {
            lider = integrante.nombre;
          }
        }
      }

      if (integrantesArea.length > 0) {
        const areaResumen: EquipoDto = {
          area: nombreArea,
          integrantes: integrantesArea,
          lider: lider,
        };

        areasResumen.push(areaResumen);
      }
    }

    return {
      nombreProyecto: this.equipo.nombreEquipo,
      areas: areasResumen,
    }
  }

  //2. Filtrar integrantes segun su area, indicando quien es el lider de dicha area
  getIntegrantesArea(area: areasEquipo): IntegrantesPorAreaYLiderDTO {
    const integrantesConsultados = this.integrantes.filter((integrante) => integrante.area === area);
    if (integrantesConsultados.length === 0) {
      throw new NotFoundException(`No hay integrante para el área ${area}`);
    }

    const liderArea = integrantesConsultados.find((integrante) => integrante.lider == true);
    if (!liderArea) {
      throw new NotFoundException(`No hay hay lider definido para esta área`);
    }

    const integrantesPorAreaYLider = new IntegrantesPorAreaYLiderDTO();
    integrantesPorAreaYLider.integrantesArea = integrantesConsultados;
    integrantesPorAreaYLider.liderArea = liderArea;
    return integrantesPorAreaYLider;
  }

  //3. Conseguir todos los integrantes del equipo
  getTodosLosIntegrantes(): Integrante[] {
    return this.integrantes;
  }

  //4. De acuerdo con un rut, retornar el integrante al que corresponde
  GetFiltrarPorRut(rut: string): Integrante {
    const intg = this.integrantes.find(i => i.rut === rut)
    if (intg) {
      return intg
    } else {
      throw new NotFoundException(`No existe integrante con rut ${rut} en este grupo`)
    }
  }

  //5. Crear una lista de cada area con sus respectivos integrantes
  getIntegrantesPorArea() {
    const integrantesPorArea = {
      UX_UI: [] as string[],
      FRONTEND: [] as string[],
      BACKEND: [] as string[],
      MOBILE: [] as string[],
    };
    for (let i = 0; i < this.integrantes.length; i++) {
      const integrante = this.integrantes[i]

      if (integrante.area === areasEquipo.UX_UI) {
        integrantesPorArea.UX_UI.push(integrante.nombre);
      } else if (integrante.area === areasEquipo.FRONTEND) {
        integrantesPorArea.FRONTEND.push(integrante.nombre);
      } else if (integrante.area === areasEquipo.BACKEND) {
        integrantesPorArea.BACKEND.push(integrante.nombre);
      } else if (integrante.area === areasEquipo.MOBILE) {
        integrantesPorArea.MOBILE.push(integrante.nombre);
      }
    }
    return integrantesPorArea
  } // Equipo: Acá tengo una duda si debemos entregar el objeto Integrante o Integrante.nombre. Hice una consulta al profe.

  //6. Informacion del E-Commerce (nombre, descripción, tipo y objetivos)
  getEcommerce(): EcommerceDto {
    return {
      nombre: 'Tatapp',
      descripcion: 'Plataforma E-commerce',
      tipo: 'B2C',
      objetivos: ['Crear una plataforma de e-commerce que permita a los usuarios comprar productos de manera fácil y rápida.']
    };
  }
  // Propongo llevar esto a un DTO.
}

