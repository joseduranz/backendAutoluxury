"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactoUsuario = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let ContactoUsuario = class ContactoUsuario extends repository_1.Model {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ContactoUsuario.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ContactoUsuario.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: false,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ContactoUsuario.prototype, "emailPrueba", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ContactoUsuario.prototype, "telefono", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ContactoUsuario.prototype, "mensaje", void 0);
ContactoUsuario = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], ContactoUsuario);
exports.ContactoUsuario = ContactoUsuario;
//# sourceMappingURL=contacto-usuario.model.js.map