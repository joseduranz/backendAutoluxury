import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { MongodbDataSource } from '../datasources';
import { Solicitud, SolicitudRelations, Persona } from '../models';
import { PersonaRepository } from './persona.repository';
export declare class SolicitudRepository extends DefaultCrudRepository<Solicitud, typeof Solicitud.prototype.id, SolicitudRelations> {
    protected personaRepositoryGetter: Getter<PersonaRepository>;
    readonly persona: BelongsToAccessor<Persona, typeof Solicitud.prototype.id>;
    constructor(dataSource: MongodbDataSource, personaRepositoryGetter: Getter<PersonaRepository>);
}
