import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { MongodbDataSource } from '../datasources';
import { Persona, PersonaRelations, Solicitud } from '../models';
import { SolicitudRepository } from './solicitud.repository';
export declare class PersonaRepository extends DefaultCrudRepository<Persona, typeof Persona.prototype.id, PersonaRelations> {
    protected solicitudRepositoryGetter: Getter<SolicitudRepository>;
    readonly solicituds: HasManyRepositoryFactory<Solicitud, typeof Persona.prototype.id>;
    constructor(dataSource: MongodbDataSource, solicitudRepositoryGetter: Getter<SolicitudRepository>);
}
