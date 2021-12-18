"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonaController = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const llaves_1 = require("../config/llaves");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
const services_1 = require("../services");
const fetch = require("node-fetch");
let PersonaController = class PersonaController {
    constructor(personaRepository, servicioAutenticacion) {
        this.personaRepository = personaRepository;
        this.servicioAutenticacion = servicioAutenticacion;
    }
    async identificarPersona(credenciales) {
        let personaBuscada = await this.servicioAutenticacion.IdentificarPersona(credenciales.usuario, credenciales.clave);
        if (personaBuscada) {
            let token = this.servicioAutenticacion.GenerarTokenJWT(personaBuscada);
            return {
                datos: {
                    nombre: personaBuscada.nombres,
                    correo: personaBuscada.correoElectronico,
                    id: personaBuscada.id,
                    rol: personaBuscada.rol //implementar
                },
                tk: token
            };
        }
        else {
            throw new rest_1.HttpErrors[401]("Los datos suministrados no son validos");
        }
    }
    async create(persona) {
        let claveGenerada = this.servicioAutenticacion.GenerarClave();
        let claveCifrada = this.servicioAutenticacion.cifrarClave(claveGenerada);
        persona.contrasena = claveCifrada;
        let objetoPersona = await this.personaRepository.create(persona);
        //notificación a usuario unificado con spyder(python)
        let destino = persona.correoElectronico;
        let asunto = "Registro en la AUTO LUXURY";
        let contenido = `Hola, ${persona.nombres},
    su nombre de usuario es: ${persona.correoElectronico},
    y la contraseña de acceso es "${claveGenerada}`; //Backtick alt + 96
        fetch(`${llaves_1.Llaves.urlServicioNotificaciones}/envio-correo?correo_destino=${destino}&asunto=${asunto}&contenido=${contenido}`)
            .then((data) => {
            console.log(data);
        });
        return objetoPersona;
    }
    async count(where) {
        return this.personaRepository.count(where);
    }
    async find(filter) {
        return this.personaRepository.find(filter);
    }
    async updateAll(persona, where) {
        return this.personaRepository.updateAll(persona, where);
    }
    async findById(id, filter) {
        return this.personaRepository.findById(id, filter);
    }
    async updateById(id, persona) {
        await this.personaRepository.updateById(id, persona);
    }
    async replaceById(id, persona) {
        await this.personaRepository.replaceById(id, persona);
    }
    async deleteById(id) {
        await this.personaRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)("/identificarPersona", {
        responses: {
            '200': {
                description: "identificación de usuario"
            }
        }
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Credenciales]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PersonaController.prototype, "identificarPersona", null);
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/personas'),
    (0, rest_1.response)(200, {
        description: 'Persona model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Persona) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Persona, {
                    title: 'NewPersona',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PersonaController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/personas/count'),
    (0, rest_1.response)(200, {
        description: 'Persona model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Persona)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PersonaController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/personas'),
    (0, rest_1.response)(200, {
        description: 'Array of Persona model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Persona, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Persona)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PersonaController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/personas'),
    (0, rest_1.response)(200, {
        description: 'Persona PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Persona, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Persona)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Persona, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PersonaController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/personas/{id}'),
    (0, rest_1.response)(200, {
        description: 'Persona model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Persona, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Persona, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PersonaController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/personas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Persona PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Persona, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Persona]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PersonaController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/personas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Persona PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Persona]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PersonaController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/personas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Persona DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PersonaController.prototype, "deleteById", null);
PersonaController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.PersonaRepository)),
    (0, tslib_1.__param)(1, (0, core_1.service)(services_1.AutenticacionService)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.PersonaRepository,
        services_1.AutenticacionService])
], PersonaController);
exports.PersonaController = PersonaController;
//# sourceMappingURL=persona.controller.js.map