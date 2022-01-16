exports.seed = async(knex) => {
    // Deletes ALL existing entries
    // await knex.raw('ALTER SEQUENCE book_id_sequence restart with 5;')
    await knex('book').del()
        .then(() => {
            // Inserts seed entries
            return knex('book').insert([{
                    id: 1,
                    title: 'A Piece of the Sun',
                    author: 'Daniel Clery',
                    is_favorite: true
                },
                {
                    id: 2,
                    title: 'The Lord of the Rings',
                    author: 'J. R. R. Tolkien',
                    is_favorite: false
                },
                {
                    id: 3,
                    title: 'Game of Thrones',
                    author: 'George R. R. Martin',
                    is_favorite: false
                },
                {
                    id: 4,
                    title: 'We Are Anonymous',
                    author: 'Parmy Olson',
                    is_favorite: true
                }
            ]);
        });
};