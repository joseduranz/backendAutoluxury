"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonaSolicitudController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PersonaSolicitudController = class PersonaSolicitudController {
    constructor(personaRepository) {
        this.personaRepository = personaRepository;
    }
    async find(id, filter) {
        return this.personaRepository.solicituds(id).find(filter);
    }
    async create(id, solicitud) {
        return this.personaRepository.solicituds(id).create(solicitud);
    }
    async patch(id, solicitud, where) {
        return this.personaRepository.solicituds(id).patch(solicitud, where);
    }
    async delete(id, where) {
        return this.personaRepository.solicituds(id).delete(where);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/personas/{id}/solicituds', {
        responses: {
            '200': {
                description: 'Array of Persona has many Solicitud',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Solicitud) },
                    },
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.query.object('filter')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PersonaSolicitudController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/personas/{id}/solicituds', {
        responses: {
            '200': {
                description: 'Persona model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Solicitud) } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Solicitud, {
                    title: 'NewSolicitudInPersona',
                    exclude: ['id'],
                    optional: ['personaId']
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PersonaSolicitudController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/personas/{id}/solicituds', {
        responses: {
            '200': {
                description: 'Persona.Solicitud PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Solicitud, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Solicitud))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PersonaSolicitudController.prototype, "patch", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/personas/{id}/solicituds', {
        responses: {
            '200': {
                description: 'Persona.Solicitud DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Solicitud))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PersonaSolicitudController.prototype, "delete", null);
PersonaSolicitudController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.PersonaRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.PersonaRepository])
], PersonaSolicitudController);
exports.PersonaSolicitudController = PersonaSolicitudController;
//# sourceMappingURL=persona-solicitud.controller.js.map