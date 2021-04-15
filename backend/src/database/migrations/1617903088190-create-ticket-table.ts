import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { TicketStatus } from '../../tickets/entities/ticket.entity';

export class createTicketTable1617903088190 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'ticket',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'title',
            type: 'varchar',
            isNullable: false,
            // Default value field
            // "value" or 'value' generates wrong sql query: expected DEFAULT "new ticket" => got DEFAULT new ticket
            // => works with double + simple quotes "'string'"
            default: "'new ticket'",
          },
          {
            name: 'description',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'status',
            type: 'enum',
            enum: Object.keys(TicketStatus).map((k) => TicketStatus[k]),
            enumName: 'statusEnum',
            default: "'To Do'",
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('ticket');
  }
}
