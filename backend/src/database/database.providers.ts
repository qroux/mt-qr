import { constants } from 'src/constants';
import { Connection, createConnection } from 'typeorm';
import configuration from '../config/database.config';

// export const databaseProviders = [
//   {
//     provide: constants.DATABASE_CONNECTION,
//     inject: [],
//     useFactory: async (): Promise<Connection> =>
//       await createConnection({
//         type: configuration.type,
//         host: configuration.host,
//         port: configuration.port,
//         username: configuration.username,
//         password: configuration.password,
//         database: configuration.database,
//         entities: configuration.entities,
//         synchronize: configuration.synchronize,
//         logging: configuration.logging,
//         logger: configuration.logger,
//       }),
//   },
// ];

export const databaseProviders = [
  {
    provide: constants.DATABASE_CONNECTION,
    useFactory: (): Promise<Connection> =>
      createConnection({
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
