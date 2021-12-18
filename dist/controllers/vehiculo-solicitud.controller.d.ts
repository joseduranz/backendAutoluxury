import { Count, Filter, Where } from '@loopback/repository';
import { Vehiculo, Solicitud } from '../models';
import { VehiculoRepository } from '../repositories';
export declare class VehiculoSolicitudController {
    protected vehiculoRepository: VehiculoRepository;
    constructor(vehiculoRepository: VehiculoRepository);
    get(id: string, filter?: Filter<Solicitud>): Promise<Solicitud>;
    create(id: typeof Vehiculo.prototype.id, solicitud: Omit<Solicitud, 'id'>): Promise<Solicitud>;
    patch(id: string, solicitud: Partial<Solicitud>, where?: Where<Solicitud>): Promise<Count>;
    delete(id: string, where?: Where<Solicitud>): Promise<Count>;
}
