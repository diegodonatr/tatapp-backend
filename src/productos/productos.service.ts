import { Injectable } from '@nestjs/common';
import { UpdateProductoDto } from './dto/update-producto.dto';

@Injectable()
export class ProductosService {
  ///CATEGORIAS///
  //Mostrar todas las categorias
  getCategorias() {
    return `lista ordenada de categorias (con icono grande)`
  }

  ///CATALOGO///
  //  filtra el catalogo por categoria
  getFiltroCategoria(categoriaId?: string) {
    return `Filtrar por categoria `
  }
  //filtrart tipo
  getFiltroTipo(tipo?: `producto` | `servicio`) {
    return `Filtrar por Servicio o Producto `
  }
  getCatalogoTexto(texto?: string) {
    return `Buscar en catálogo por texto: ${texto ?? '(vacío)'}`
  }

  ///PUBLICACION///
  // filtrar por id 
  getFiltroId(id: string) {
    return `Filtrar por id de producto o servicio para obtener su detalle `
  }

  /// RESENIA ///
  // filtrar por reseñas
  getResenia(id: string, puntaje: number) {
    return `Filtrar por puntaje o publicacion con reseña`
  }

}









