"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstrategiaAdministrador = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const rest_1 = require("@loopback/rest");
const parse_bearer_token_1 = (0, tslib_1.__importDefault)(require("parse-bearer-token"));
const services_1 = require("../services");
let EstrategiaAdministrador = class EstrategiaAdministrador {
    //metodo constructor
    constructor(servicioAutenticacion //aqui creo un objeto de tipo servicio de autenticacion para poder acceder a el
    ) {
        this.servicioAutenticacion = servicioAutenticacion;
        this.name = 'admin';
    }
    async authenticate(request) {
        let token = (0, parse_bearer_token_1.default)(request); //con el token dar autorizaciones
        if (token) {
            let datos = this.servicioAutenticacion.ValidarTokenJWT(token);
            if (datos) {
                let perfil = Object.assign({
                    nombre: datos.data.nombre
                });
                return perfil;
            }
            else {
                throw new rest_1.HttpErrors[401]("El token suministrado no es válido"); // muestra en pantalla en el frontend
            }
        }
        else {
            throw new rest_1.HttpErrors[401]("No hay un token en la solicitud"); // muestra en pantalla en el frontend
        }
    }
};
EstrategiaAdministrador = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.service)(services_1.AutenticacionService)),
    (0, tslib_1.__metadata)("design:paramtypes", [services_1.AutenticacionService //aqui creo un objeto de tipo servicio de autenticacion para poder acceder a el
    ])
], EstrategiaAdministrador);
exports.EstrategiaAdministrador = EstrategiaAdministrador;
//# sourceMappingURL=admin.strategy.js.map