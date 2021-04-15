const { createConnection } = require('typeorm');
const configuration = {
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
};

createConnection({
  type: configuration.type,
  host: configuration.host,
  port: configuration.port,
  username: configuration.username,
  password: configuration.password,
  database: configuration.database,
  entities: configuration.entities,
  synchronize: false,
  logging: true,
  ssl: true,
  extra: { ssl: { rejectUnauthorized: false } },
  connectTimeoutMS: 30000,
  logNotifications: true,
  poolErrorHandler: (error) => {
    throw new Error(error.message);
  },
})
  .then((co) => console.log('create connection =>', co))
  .catch((err) => console.log('Connection failed', err));
