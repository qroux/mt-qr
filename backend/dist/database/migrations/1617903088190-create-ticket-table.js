"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTicketTable1617903088190 = void 0;
const typeorm_1 = require("typeorm");
class createTicketTable1617903088190 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'ticket',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('ticket');
    }
}
exports.createTicketTable1617903088190 = createTicketTable1617903088190;
//# sourceMappingURL=1617903088190-create-ticket-table.js.map