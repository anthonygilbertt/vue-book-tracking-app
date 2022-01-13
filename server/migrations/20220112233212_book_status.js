exports.up = (knex, Promise) => {
    return knex.schema.createTable('book_status', (table) => {
        table.increments();
        table.text('status').notNullable();
    })
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('book_status')
};