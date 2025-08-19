import { Categoria } from "../entities/categoria.entity"

export class FiltroCatalogoDto {
    id: string
    titulo: string
    tipo: 'producto' | 'servicio'
    precio: number
    categoriaId: Categoria
    proveedor: string
}