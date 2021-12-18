import { Entity } from '@loopback/repository';
import { Solicitud } from './solicitud.model';
export declare class Vehiculo extends Entity {
    id?: string;
    matricula: string;
    marca: string;
    modelo: string;
    categoria: string;
    precio: number;
    tipoOferta: string;
    encargado: string;
    contactoEncargado: string;
    foto: string;
    video: string;
    estado: string;
    solicitud: Solicitud;
    constructor(data?: Partial<Vehiculo>);
}
export interface VehiculoRelations {
}
export declare type VehiculoWithRelations = Vehiculo & VehiculoRelations;
