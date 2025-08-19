export class Categoria {
    constructor (
        public id: string, 
        public nombre: string,
        public iconoUrl: string,
        public orden: number, // esto en caso de que no se orden de manera alfabetica, sino que por prioridad. 
        public activa: boolean,
    ) {} 
}
