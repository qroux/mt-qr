import { Connection } from 'typeorm';
import { Ticket } from './entities/ticket.entity';
import { constants } from '../constants';

export const ticketsProviders = [
  {
    provide: constants.TICKETS_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(Ticket),
    inject: [constants.DATABASE_CONNECTION],
  },
];
