"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonaRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let PersonaRepository = class PersonaRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, solicitudRepositoryGetter) {
        super(models_1.Persona, dataSource);
        this.solicitudRepositoryGetter = solicitudRepositoryGetter;
        this.solicituds = this.createHasManyRepositoryFactoryFor('solicituds', solicitudRepositoryGetter);
        this.registerInclusionResolver('solicituds', this.solicituds.inclusionResolver);
    }
};
PersonaRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.mongodb')),
    (0, tslib_1.__param)(1, repository_1.repository.getter('SolicitudRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [datasources_1.MongodbDataSource, Function])
], PersonaRepository);
exports.PersonaRepository = PersonaRepository;
//# sourceMappingURL=persona.repository.js.map