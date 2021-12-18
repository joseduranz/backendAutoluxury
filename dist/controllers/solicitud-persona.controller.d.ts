import { Solicitud, Persona } from '../models';
import { SolicitudRepository } from '../repositories';
export declare class SolicitudPersonaController {
    solicitudRepository: SolicitudRepository;
    constructor(solicitudRepository: SolicitudRepository);
    getPersona(id: typeof Solicitud.prototype.id): Promise<Persona>;
}
