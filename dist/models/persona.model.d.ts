import { Entity } from '@loopback/repository';
import { Solicitud } from './solicitud.model';
export declare class Persona extends Entity {
    id?: string;
    nombres: string;
    apellidos: string;
    rol: string;
    direccion: string;
    correoElectronico: string;
    celular: string;
    contrasena: string;
    solicituds: Solicitud[];
    constructor(data?: Partial<Persona>);
}
export interface PersonaRelations {
}
export declare type PersonaWithRelations = Persona & PersonaRelations;
