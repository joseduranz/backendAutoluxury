"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehiculoSolicitudController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let VehiculoSolicitudController = class VehiculoSolicitudController {
    constructor(vehiculoRepository) {
        this.vehiculoRepository = vehiculoRepository;
    }
    async get(id, filter) {
        return this.vehiculoRepository.solicitud(id).get(filter);
    }
    async create(id, solicitud) {
        return this.vehiculoRepository.solicitud(id).create(solicitud);
    }
    async patch(id, solicitud, where) {
        return this.vehiculoRepository.solicitud(id).patch(solicitud, where);
    }
    async delete(id, where) {
        return this.vehiculoRepository.solicitud(id).delete(where);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/vehiculos/{id}/solicitud', {
        responses: {
            '200': {
                description: 'Vehiculo has one Solicitud',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.Solicitud),
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
], VehiculoSolicitudController.prototype, "get", null);
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/vehiculos/{id}/solicitud', {
        responses: {
            '200': {
                description: 'Vehiculo model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Solicitud) } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Solicitud, {
                    title: 'NewSolicitudInVehiculo',
                    exclude: ['id'],
                    optional: ['vehiculoId']
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], VehiculoSolicitudController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/vehiculos/{id}/solicitud', {
        responses: {
            '200': {
                description: 'Vehiculo.Solicitud PATCH success count',
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
], VehiculoSolicitudController.prototype, "patch", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/vehiculos/{id}/solicitud', {
        responses: {
            '200': {
                description: 'Vehiculo.Solicitud DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Solicitud))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], VehiculoSolicitudController.prototype, "delete", null);
VehiculoSolicitudController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.VehiculoRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.VehiculoRepository])
], VehiculoSolicitudController);
exports.VehiculoSolicitudController = VehiculoSolicitudController;
//# sourceMappingURL=vehiculo-solicitud.controller.js.map