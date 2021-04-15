import { Connection, createConnection } from 'typeorm';
import configuration from '../config/database.config';
import { constants } from '../constants';

export const databaseProviders = [
  {
    provide: constants.DATABASE_CONNECTION,
    useFactory: (): Promise<Connection> => {
      try {
        console.log('Connecting DB');
        return createConnection({
          type: configuration.type,
          host: configuration.host,
          port: configuration.port,
          username: configuration.username,
          password: configuration.password,
          database: configuration.database,
          entities: configuration.entities,
          synchronize: false,
          logging: configuration.logging,
          logger: configuration.logger,
          /**
           * The milliseconds before a timeout occurs during the initial connection to the postgres
           * server. If undefined, or set to 0, there is no timeout. Defaults to undefined.
           *
           * => Force error throwing if connection fails silently => check node + pg version compatibility
           */
          connectTimeoutMS: 10000,
        });
      } catch (err) {
        console.log('DB provider', err);
        return err;
      }
    },
  },
];
