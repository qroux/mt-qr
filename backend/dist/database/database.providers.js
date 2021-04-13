"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const typeorm_1 = require("typeorm");
const database_config_1 = require("../config/database.config");
exports.databaseProviders = [
    {
        provide: 'DbConnection',
        inject: [],
        useFactory: () => typeorm_1.createConnection({
            type: database_config_1.default.type,
            host: database_config_1.default.host,
            port: database_config_1.default.port,
            username: database_config_1.default.username,
            password: database_config_1.default.password,
            database: database_config_1.default.database,
            entities: database_config_1.default.entities,
            synchronize: database_config_1.default.synchronize,
            logging: database_config_1.default.logging,
            logger: database_config_1.default.logger,
        }),
    },
];
//# sourceMappingURL=database.providers.js.map