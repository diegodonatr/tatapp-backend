import { Categoria } from "src/productos/entities/categoria.entity";
import { Proveedor } from "./proveedor.entity";

export class Publicacion {
    constructor (
        public id: string, 
        public titulo: string, 
        public tipo: `producto` | `servicio`,
        public precio: number, 
        public categoriaId: Categoria,
        public proveedorId: Proveedor,
        public imagenUrl: string, 
        public activa: boolean
    ) {}
}