import { Entity } from '@loopback/repository';
export declare class Solicitud extends Entity {
    id?: string;
    departamento: string;
    ciudad: string;
    direccion: string;
    tipo: string;
    contratoAceptado: string;
    contratoCargado: string;
    personaId: string;
    vehiculoId?: string;
    constructor(data?: Partial<Solicitud>);
}
export interface SolicitudRelations {
}
export declare type SolicitudWithRelations = Solicitud & SolicitudRelations;
