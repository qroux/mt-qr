import { Connection, createConnection } from 'typeorm';
import configuration from '../config/database.config';
import { constants } from '../constants';

export const databaseProviders = [
  {
    provide: constants.DATABASE_CONNECTION,
    useFactory: async (): Promise<Connection> => {
      try {
        console.log(
          `Attempt to connect TO ${configuration.database} on PORT ${
            configuration.host + ':' + configuration.port
          } as ${configuration.username}`,
        );
        return await createConnection({
          type: configuration.type,
          host: configuration.host,
          port: configuration.port,
          username: configuration.username,
          password: configuration.password,
          database: configuration.database,
          entities: configuration.entities,
          synchronize: true,
          logging: configuration.logging,
          logger: configuration.logger,
        });
      } catch (err) {
        console.log('Connection failed');
        return err;
      }
    },
  },
];
