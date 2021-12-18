"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolicitudController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SolicitudController = class SolicitudController {
    constructor(solicitudRepository) {
        this.solicitudRepository = solicitudRepository;
    }
    async create(solicitud) {
        return this.solicitudRepository.create(solicitud);
    }
    async count(where) {
        return this.solicitudRepository.count(where);
    }
    async find(filter) {
        return this.solicitudRepository.find(filter);
    }
    async updateAll(solicitud, where) {
        return this.solicitudRepository.updateAll(solicitud, where);
    }
    async findById(id, filter) {
        return this.solicitudRepository.findById(id, filter);
    }
    async updateById(id, solicitud) {
        await this.solicitudRepository.updateById(id, solicitud);
    }
    async replaceById(id, solicitud) {
        await this.solicitudRepository.replaceById(id, solicitud);
    }
    async deleteById(id) {
        await this.solicitudRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/solicituds'),
    (0, rest_1.response)(200, {
        description: 'Solicitud model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Solicitud) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Solicitud, {
                    title: 'NewSolicitud',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SolicitudController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/solicituds/count'),
    (0, rest_1.response)(200, {
        description: 'Solicitud model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Solicitud)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SolicitudController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/solicituds'),
    (0, rest_1.response)(200, {
        description: 'Array of Solicitud model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Solicitud, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Solicitud)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SolicitudController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/solicituds'),
    (0, rest_1.response)(200, {
        description: 'Solicitud PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Solicitud, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Solicitud)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Solicitud, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SolicitudController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/solicituds/{id}'),
    (0, rest_1.response)(200, {
        description: 'Solicitud model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Solicitud, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Solicitud, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SolicitudController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/solicituds/{id}'),
    (0, rest_1.response)(204, {
        description: 'Solicitud PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Solicitud, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Solicitud]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SolicitudController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/solicituds/{id}'),
    (0, rest_1.response)(204, {
        description: 'Solicitud PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Solicitud]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SolicitudController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/solicituds/{id}'),
    (0, rest_1.response)(204, {
        description: 'Solicitud DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SolicitudController.prototype, "deleteById", null);
SolicitudController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.SolicitudRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.SolicitudRepository])
], SolicitudController);
exports.SolicitudController = SolicitudController;
//# sourceMappingURL=solicitud.controller.js.map