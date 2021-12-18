import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Vehiculo } from '../models';
import { VehiculoRepository } from '../repositories';
export declare class VehiculoController {
    vehiculoRepository: VehiculoRepository;
    constructor(vehiculoRepository: VehiculoRepository);
    create(vehiculo: Omit<Vehiculo, 'id'>): Promise<Vehiculo>;
    count(where?: Where<Vehiculo>): Promise<Count>;
    find(filter?: Filter<Vehiculo>): Promise<Vehiculo[]>;
    updateAll(vehiculo: Vehiculo, where?: Where<Vehiculo>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Vehiculo>): Promise<Vehiculo>;
    updateById(id: string, vehiculo: Vehiculo): Promise<void>;
    replaceById(id: string, vehiculo: Vehiculo): Promise<void>;
    deleteById(id: string): Promise<void>;
}
