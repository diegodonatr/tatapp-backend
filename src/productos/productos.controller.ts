import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { UpdateProductoDto } from './dto/update-producto.dto';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) { }

  /// CATEGORÍAS
  // GET /productos/categorias
  @Get('categorias')
  getCategorias() {
    return this.productosService.getCategorias(); 
  }

  /// CATÁLOGO (listado/búsqueda)
  // GET /productos/catalogo?categoriaId=...
  @Get('catalogo')
  getFiltroCategoria(@Query('categoriaId') categoriaId?: string) {
    return this.productosService.getFiltroCategoria(categoriaId);
  }

  // GET /productos/catalogo/tipo?tipo=producto|servicio
  @Get('catalogo/tipo')
  getFiltroTipo(@Query('tipo') tipo?: 'producto' | 'servicio') {
    return this.productosService.getFiltroTipo(tipo);
  }

  // GET /productos/catalogo/buscar?texto=...
  @Get('catalogo/buscar')
  getFiltroProducto(@Query('texto') texto?: string) {
    return this.productosService.getCatalogoTexto(texto);
  }

  /// DETALLE / RESEÑAS
  // GET /productos/:id
  @Get(':id')
  getDetalle(@Param('id') id: string) {
    return this.productosService.getFiltroId(id);
  }

  // GET /productos/:id/resenas?puntajeMin=3
  @Get(':id/resenas')
  getResenia(@Param('id') id: string, @Query('puntaje') puntaje: number) {
    return this.productosService.getResenia(id, puntaje);
  }

}


