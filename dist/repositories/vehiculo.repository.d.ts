import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasOneRepositoryFactory } from '@loopback/repository';
import { MongodbDataSource } from '../datasources';
import { Vehiculo, VehiculoRelations, Solicitud } from '../models';
import { SolicitudRepository } from './solicitud.repository';
export declare class VehiculoRepository extends DefaultCrudRepository<Vehiculo, typeof Vehiculo.prototype.id, VehiculoRelations> {
    protected solicitudRepositoryGetter: Getter<SolicitudRepository>;
    readonly solicitud: HasOneRepositoryFactory<Solicitud, typeof Vehiculo.prototype.id>;
    constructor(dataSource: MongodbDataSource, solicitudRepositoryGetter: Getter<SolicitudRepository>);
}
