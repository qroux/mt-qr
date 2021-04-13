import { Connection, createConnection } from 'typeorm';
import configuration from '../config/database.config';
import { constants } from '../constants';

// export const databaseProviders = [
//   {
//     provide: constants.DATABASE_CONNECTION,
//     useFactory: async (): Promise<Connection> =>
//       await createConnection({
//         type: configuration.type,
//         host: configuration.host,
//         port: configuration.port,
//         username: configuration.username,
//         password: configuration.password,
//         database: configuration.database,
//         entities: configuration.entities,
//         synchronize: false,
//         logging: configuration.logging,
//         logger: configuration.logger,
//       }),
//   },
// ];

export const databaseProviders = [
  {
    provide: constants.DATABASE_CONNECTION,
    useFactory: async (): Promise<Connection> =>
      await createConnection({
        type: 'postgres' || configuration.type,
        host: 'localhost' || configuration.host,
        port: parseInt('5555') || configuration.port,
        username: 'root' || configuration.username,
        password: 'root' || configuration.password,
        database: 'my_trello' || configuration.database,
        entities:
          [`${__dirname}/../**/*.entity{.ts,.js}`] || configuration.entities,
        synchronize: false,
        logging: configuration?.logging,
        logger: configuration?.logger,
      }),
  },
];
