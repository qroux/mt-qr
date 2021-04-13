"use strict";
module.exports = {
    type: 'postgres',
    host: 'localhost',
    port: parseInt('5555'),
    username: 'root',
    password: 'root',
    database: 'my_trello',
    migrations: [
        `${__dirname}/../database/migrations/*`,
    ],
    cli: {
        migrationsDir: `${__dirname}/database/migrations`,
    },
    entities: [
        `${__dirname}/../**/*.entity{.ts,.js}`,
    ],
};
//# sourceMappingURL=database.config.js.map