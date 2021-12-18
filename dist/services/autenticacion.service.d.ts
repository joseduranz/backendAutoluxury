import { Persona } from '../models/persona.model';
import { PersonaRepository } from '../repositories';
export declare class AutenticacionService {
    personaRepositorio: PersonaRepository;
    constructor(personaRepositorio: PersonaRepository);
    GenerarClave(): any;
    cifrarClave(claveConstruida: string): any;
    IdentificarPersona(usuario: string, clave: string): false | Promise<(Persona & import("../models/persona.model").PersonaRelations) | null>;
    GenerarTokenJWT(persona: Persona): any;
    ValidarTokenJWT(token: string): any;
}
