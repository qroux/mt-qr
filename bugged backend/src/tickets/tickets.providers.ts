import { Connection, Repository } from 'typeorm';
import { Ticket } from './entities/ticket.entity';
import { constants } from '../constants';

export const ticketsProviders = [
  {
    provide: constants.TICKETS_REPOSITORY,
    useFactory: (connection: Connection) => {
      try {
        console.log('Ticket Repository');
        return connection.getRepository(Ticket);
      } catch (err) {
        return err;
      }
    },
    inject: [constants.DATABASE_CONNECTION],
  },
];
