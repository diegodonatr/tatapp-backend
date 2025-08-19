export class Proveedor {
    constructor(
        public id: string,
        public nombre: string,
        public clasificacion: number //opcional, clasificasion que se le dara a los proveedores en caso de que lo queramos usar
    ) {}
}