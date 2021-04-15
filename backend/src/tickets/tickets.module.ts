import { Module } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { TicketsController } from './tickets.controller';
import { DatabaseModule } from 'src/database/database.module';
import { ticketsProviders } from './tickets.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [TicketsController],
  providers: [...ticketsProviders, TicketsService],
})
export class TicketsModule {}
