"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutenticacionService = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const llaves_1 = require("../config/llaves");
const repositories_1 = require("../repositories");
const generador = require("password-generator");
const cryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
let AutenticacionService = class AutenticacionService {
    constructor(personaRepositorio) {
        this.personaRepositorio = personaRepositorio;
    }
    /*
     * Add service methods here
     */
    //GENERAR CLAVE AUTOMATICAMENTE
    GenerarClave() {
        let clave = generador(8, false); // el primer parametro es cuantos caracteres va a tener el pasword y el segundo si es true convinar alphanumericos y simbolos si es false solo alphanumericos
        return clave;
    }
    // CIFRAR - CODIFICAR ESA CLAVE
    cifrarClave(claveConstruida) {
        let claveCifrada = cryptoJS.MD5(claveConstruida).toString(); //se encrypta la contraseña a traves de MD5
        return claveCifrada;
    }
    //AUTENTICACIÓN DE LA PERSONA
    IdentificarPersona(usuario, clave) {
        //se usa try y catch por si no se conecta a la base de datos, nos muestre el codigo y ai poder resolver
        try {
            // buscamos el usuario y la contraseña
            let personaBuscada = this.personaRepositorio.findOne({ where: { correoElectronico: usuario, contrasena: clave } });
            if (personaBuscada) { // si se encuentra la persona se retorna
                return personaBuscada;
            }
            else { // si no la encuentra retorna un false
                return false;
            }
            // si no se puede conectar a la base de datos retornar un false
        }
        catch (_a) {
            return false;
        }
    }
    //generación del TOKEN
    GenerarTokenJWT(persona) {
        let token = jwt.sign({
            data: {
                id: persona.id,
                correo: persona.correoElectronico,
                nombre: persona.nombres + " " + persona.apellidos
            }
        }, llaves_1.Llaves.claveJWT);
        return token;
    }
    // validación del token
    ValidarTokenJWT(token) {
        try { //intenta validar lo que hay en el token en la clave coincidan
            let datos = jwt.verify(token, llaves_1.Llaves.claveJWT);
            return datos;
        }
        catch (_a) {
            return false;
        }
    }
};
AutenticacionService = (0, tslib_1.__decorate)([
    (0, core_1.injectable)({ scope: core_1.BindingScope.TRANSIENT }),
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.PersonaRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.PersonaRepository])
], AutenticacionService);
exports.AutenticacionService = AutenticacionService;
//# sourceMappingURL=autenticacion.service.js.map