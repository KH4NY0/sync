import {integer, pgTable, serial, timestamp, text, pgEnum} from "drizzle-orm/pg-core";

export const statusEnum = pgEnum('status',
    [
        'open', 'paid', 'void', 'uncollectible'
    ])

export const Invoices = pgTable('invoices', {
    id: serial('id').primaryKey().notNull(),
    createTs: timestamp('createTs').defaultNow().notNull(),
    amount: integer('amount').notNull(),
    description: text('description').notNull(),
    status: statusEnum('status').notNull()
})