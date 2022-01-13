exports.seed = async(knex) => {
    // Deletes ALL existing entries
    // await knex.raw('ALTER SEQUENCE book_id_sequence restart with 5;')
    await knex('book_status').del()
        .then(() => {
            // Inserts seed entries
            return knex('book_status').insert([
                { id: 1, status: 'to read' },
                { id: 2, status: 'reading' },
                { id: 3, status: 'read' },
                { id: 4, status: 'archived' }
            ]);
        });
};