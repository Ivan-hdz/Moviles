export class Usuario {
    correo: string;
    contrasenia: string;
    edad: number;
    sexo: string;
    descripcion: string;
    nombre: string;
    primerApellido: string;
    segundoApellido: string;
    constructor() {
        this.contrasenia = '';
        this.correo = '';
        this.edad = -1;
        this.sexo = 'mucho';
        this.descripcion = '';
        this.nombre = '';
        this.primerApellido = '';
        this.segundoApellido = '';
    }
}
