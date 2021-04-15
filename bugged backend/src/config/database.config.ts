import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export default {
  type: 'postgres',
  host: '127.0.0.1',
  port: parseInt('5432'),
  username: 'nr',
  password: 'azerty123',
  database: 'my_trello',
  migrations: [`${__dirname}/../database/migrations/*`],
  cli: {
    migrationsDir: `${__dirname}/database/migrations`,
  },
  entities: [`${__dirname}/../**/*.entity{.ts,.js}`],
} as PostgresConnectionOptions;
