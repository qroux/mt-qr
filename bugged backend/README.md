# My Trello - Implicity technical test

This is the backend section of the My Trello app.

## Setup

### Storage

The storage is handled by a [Postgres](https://www.postgresql.org/docs/12/index.html) sql database. The database is [dockerized](https://www.docker.com/get-started) and ready to use using [docker-compose](https://docs.docker.com/compose/).

**Start up**
```shell
(sudo) docker-compose up -d 
```
This command will make the database available on your computer at the address `localhost:5555`. At the first start, the database will be empty but after initialization a `data` directory will be created and will contain all the stored data.


### Server

We already initialized an HTTP server boilerplate for you. It managed by the [Nest.js](https://docs.nestjs.com/) framework and use the [TypeOrm](https://typeorm.io/#/) library as ORM ([integration in Nest.js](https://docs.nestjs.com/recipes/sql-typeorm)). Take the time to read the documentations if you are not familiar with these libraries.

**Install dependencies**
```shell
npm install
```

**Start the service (in development mode)**
```shell
npm run start:dev
```

**Initial migration**

TypeOrm provide an easy way to script database initialization and update using "[migration](https://typeorm.io/#/migrations/using-migration-api-to-write-migrations)".

We bootstrapped the first migration in the `src/database/migrations` directory. You will need to update it.

To run a migration
```shell
npm run build
npm run migrate
```

To rollback a migration
```shell
npm run build
npm run rollback
```


## That all for the guidance on this section !
We wish you good luck and have fun !
If you have any question feel free to ask at [data-ingestion@implicity.fr](mailto:https://typeorm.io/#/migrations/using-migration-api-to-write-migrations)
