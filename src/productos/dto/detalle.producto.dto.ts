import { Categoria } from "../entities/categoria.entity";
import { Proveedor } from "../entities/proveedor.entity";

export class DetalleProductoDto {
    id: string;
    titulo: string
    descripcion: string
    precio: number
    proveedor: Proveedor
    categoriaId: Categoria
}