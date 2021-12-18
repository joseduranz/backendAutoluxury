"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const solicitud_model_1 = require("./solicitud.model");
let Persona = class Persona extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Persona.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Persona.prototype, "nombres", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Persona.prototype, "apellidos", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Persona.prototype, "rol", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Persona.prototype, "direccion", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Persona.prototype, "correoElectronico", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Persona.prototype, "celular", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: false, // se genera automaticamente por eso se cambia a false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Persona.prototype, "contrasena", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => solicitud_model_1.Solicitud),
    (0, tslib_1.__metadata)("design:type", Array)
], Persona.prototype, "solicituds", void 0);
Persona = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Persona);
exports.Persona = Persona;
//# sourceMappingURL=persona.model.js.map