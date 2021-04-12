import { Connection, createConnection } from 'typeorm';
import configuration from '../config/database.config';

export const databaseProviders = [
    {
        provide: 'DbConnection',
        inject: [],
        useFactory: (): Promise<Connection> => createConnection({
                type: configuration.type,
                host: configuration.host,
                port: configuration.port,
                username: configuration.username,
                password: configuration.password,
                database: configuration.database,
                entities: configuration.entities,
                synchronize: configuration.synchronize,
                logging: configuration.logging,
                logger: configuration.logger,
            }),
    },
];
