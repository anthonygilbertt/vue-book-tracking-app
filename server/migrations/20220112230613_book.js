exports.up = (knex, Promise) => {
    return knex.schema.createTable('book', (table) => {
        table.increments();
        // table.integer('shelf_id').notNullable().unsigned().references('id').inTable('book_shelf');
        table.integer('user_id').unsigned().references('id').inTable('users');
        // table.integer('user_id').notNullable().unsigned();
        // table.integer('status_id').notNullable().unsigned().references('id').inTable('book_status');
        table.text('title').notNullable();
        table.text('author').notNullable();
        // table.text('image_url').notNullable();
        // table.text('created_at').notNullable();
        // table.text('updated_at').notNullable();
        table.boolean('is_favorite').notNullable();

    })
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('book')
};