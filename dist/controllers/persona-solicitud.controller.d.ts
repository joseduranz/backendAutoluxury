import { Count, Filter, Where } from '@loopback/repository';
import { Persona, Solicitud } from '../models';
import { PersonaRepository } from '../repositories';
export declare class PersonaSolicitudController {
    protected personaRepository: PersonaRepository;
    constructor(personaRepository: PersonaRepository);
    find(id: string, filter?: Filter<Solicitud>): Promise<Solicitud[]>;
    create(id: typeof Persona.prototype.id, solicitud: Omit<Solicitud, 'id'>): Promise<Solicitud>;
    patch(id: string, solicitud: Partial<Solicitud>, where?: Where<Solicitud>): Promise<Count>;
    delete(id: string, where?: Where<Solicitud>): Promise<Count>;
}
