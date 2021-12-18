"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehiculoController = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let VehiculoController = class VehiculoController {
    constructor(vehiculoRepository) {
        this.vehiculoRepository = vehiculoRepository;
    }
    async create(vehiculo) {
        return this.vehiculoRepository.create(vehiculo);
    }
    async count(where) {
        return this.vehiculoRepository.count(where);
    }
    async find(filter) {
        return this.vehiculoRepository.find(filter);
    }
    async updateAll(vehiculo, where) {
        return this.vehiculoRepository.updateAll(vehiculo, where);
    }
    async findById(id, filter) {
        return this.vehiculoRepository.findById(id, filter);
    }
    async updateById(id, vehiculo) {
        await this.vehiculoRepository.updateById(id, vehiculo);
    }
    async replaceById(id, vehiculo) {
        await this.vehiculoRepository.replaceById(id, vehiculo);
    }
    async deleteById(id) {
        await this.vehiculoRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/vehiculos'),
    (0, rest_1.response)(200, {
        description: 'Vehiculo model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Vehiculo) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Vehiculo, {
                    title: 'NewVehiculo',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], VehiculoController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/vehiculos/count'),
    (0, rest_1.response)(200, {
        description: 'Vehiculo model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Vehiculo)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], VehiculoController.prototype, "count", null);
(0, tslib_1.__decorate)([
    authentication_1.authenticate.skip(),
    (0, rest_1.get)('/vehiculos'),
    (0, rest_1.response)(200, {
        description: 'Array of Vehiculo model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Vehiculo, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Vehiculo)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], VehiculoController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/vehiculos'),
    (0, rest_1.response)(200, {
        description: 'Vehiculo PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Vehiculo, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Vehiculo)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Vehiculo, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], VehiculoController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    authentication_1.authenticate.skip(),
    (0, rest_1.get)('/vehiculos/{id}'),
    (0, rest_1.response)(200, {
        description: 'Vehiculo model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Vehiculo, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Vehiculo, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], VehiculoController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/vehiculos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Vehiculo PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Vehiculo, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Vehiculo]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], VehiculoController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/vehiculos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Vehiculo PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Vehiculo]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], VehiculoController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/vehiculos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Vehiculo DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], VehiculoController.prototype, "deleteById", null);
VehiculoController = (0, tslib_1.__decorate)([
    (0, authentication_1.authenticate)('admin'),
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.VehiculoRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.VehiculoRepository])
], VehiculoController);
exports.VehiculoController = VehiculoController;
//# sourceMappingURL=vehiculo.controller.js.map