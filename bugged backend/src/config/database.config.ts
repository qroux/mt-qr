import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export = {
  type: 'postgres',
  host: 'localhost',
  port: parseInt('5555'),
  username: 'root',
  password: 'root',
  database: 'my_trello',
  migrations: [`${__dirname}/../database/migrations/*`],
  cli: {
    migrationsDir: `${__dirname}/database/migrations`,
  },
  entities: [`${__dirname}/../**/*.entity{.ts,.js}`],
} as PostgresConnectionOptions;
