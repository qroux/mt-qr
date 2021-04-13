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
            default: 'nouveau ticket',
          },
          {
            name: 'description',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'status',
            type: 'enum',
            isNullable: false,
            default: TicketStatus.TODO,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('ticket');
  }
}
