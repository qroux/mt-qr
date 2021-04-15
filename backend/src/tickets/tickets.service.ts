import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { exception } from 'console';
import { constants } from 'src/constants';
import { Repository } from 'typeorm';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { Ticket } from './entities/ticket.entity';

@Injectable()
export class TicketsService {
  constructor(
    @Inject(constants.TICKETS_REPOSITORY)
    private ticketsRepository: Repository<Ticket>,
  ) {}

  async create(createTicketDto: CreateTicketDto): Promise<Ticket> {
    // CreateTicketDto class validators not triggered
    return await this.ticketsRepository.save(createTicketDto);
  }

  async findAll(): Promise<Ticket[]> {
    return await this.ticketsRepository.find();
  }

  async findOne(id: number): Promise<Ticket> {
    return await this.ticketsRepository.findOne(id);
  }

  async update(id: number, updateTicketDto: UpdateTicketDto): Promise<Ticket> {
    const updatedTicket = await this.ticketsRepository.preload({
      id,
      ...updateTicketDto,
    });

    if (!updatedTicket) {
      throw new NotFoundException(`UPDATE: Ticket at id:${id} does not exist`);
    }

    return await this.ticketsRepository.save(updatedTicket);
  }

  async remove(id: number): Promise<Ticket> {
    const ticketToRemove = await this.ticketsRepository.findOne(id);

    if (!ticketToRemove) {
      throw new NotFoundException(`DELETE: Ticket at id:${id} does not exist`);
    }

    return await this.ticketsRepository.remove(ticketToRemove);
  }
}
