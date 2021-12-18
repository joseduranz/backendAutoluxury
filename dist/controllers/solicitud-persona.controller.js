"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolicitudPersonaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SolicitudPersonaController = class SolicitudPersonaController {
    constructor(solicitudRepository) {
        this.solicitudRepository = solicitudRepository;
    }
    async getPersona(id) {
        return this.solicitudRepository.persona(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/solicituds/{id}/persona', {
        responses: {
            '200': {
                description: 'Persona belonging to Solicitud',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Persona) },
                    },
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SolicitudPersonaController.prototype, "getPersona", null);
SolicitudPersonaController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.SolicitudRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.SolicitudRepository])
], SolicitudPersonaController);
exports.SolicitudPersonaController = SolicitudPersonaController;
//# sourceMappingURL=solicitud-persona.controller.js.map