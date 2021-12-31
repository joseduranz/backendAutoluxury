import { Model } from '@loopback/repository';
export declare class ContactoUsuario extends Model {
    nombre: string;
    email: string;
    emailPrueba: string;
    telefono: string;
    mensaje: string;
    constructor(data?: Partial<ContactoUsuario>);
}
export interface ContactoUsuarioRelations {
}
export declare type ContactoUsuarioWithRelations = ContactoUsuario & ContactoUsuarioRelations;
