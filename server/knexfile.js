// Update with your config settings.

module.exports = {

    development: {
        client: 'pg',
        connection: 'postgres://localhost/books-db'
    },

    // staging: {
    //   client: 'postgresql',
    //   connection: {
    //     database: 'my_db',
    //     user:     'username',
    //     password: 'password'
    //   },
    //   pool: {
    //     min: 2,
    //     max: 10
    //   },
    //   migrations: {
    //     tableName: 'knex_migrations'
    //   }
    // },

    production: {
        client: 'postgresql',
        connection: 'process.env.DATABASE_URL',
        // connection: {
        // database: 'my_db',
        // user:     'username',
        // password: 'password'
        // },
        // migrations: {
        //     tableName: 'knex_migrations'
        // }
    }

};