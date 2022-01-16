const Pool = require('pg').Pool
const pool = new Pool({
    user: 'anthony',
    host: 'localhost',
    database: 'books-db',
    password: 'Blackjack2',
    port: 5432,
})


const getStatuses = (request, response) => {
    pool.query('SELECT * FROM book_status', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getStatusesById = (request, response) => {
    // const id = parseInt(request.params.id)

    // pool.query('SELECT * FROM book_status WHERE id = $1', [id], (error, results) => {
    // pool.query('SELECT * FROM book_status', [id], (error, results) => {
    // pool.query('SELECT id FROM book_status;', (error, results) => {
    pool.query('SELECT * FROM book_status WHERE id=1;', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
const getBooks = (request, response) => {
    // const id = parseInt(request.params.id)

    // pool.query('SELECT * FROM book_status WHERE id = $1', [id], (error, results) => {
    // pool.query('SELECT * FROM book_status', [id], (error, results) => {
    // pool.query('SELECT id FROM book_status;', (error, results) => {
    pool.query('SELECT * FROM book;', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

// const createBook = (request, response) => {
//     const { title, author, is_favorite, user_id } = request.body

//     pool.query('INSERT INTO book (title, author, is_favorite, user_id) VALUES ($1, $2, $3, $4)', [title, author, is_favorite, user_id], (error, results) => {
//         if (error) {
//             throw error
//         }
//         response.status(201).send(`Book added with ID: ${result.insertId}`)
//     })
// }
const createBook = (request, response) => {
    pool.query(
        "SELECT setval('book_id_seq', max(id)) FROM book;"
    )
    pool.query(
        "INSERT INTO book(title, author, is_favorite)VALUES('Book Title Test1', 'author test1', false)",
        (err, res) => {
            console.log(err, res);
            // pool.end();
        }
    );

}

module.exports = {
    getStatuses,
    getStatusesById,
    getBooks,
    createBook
    // createUser,
    // updateUser,
    // deleteUser,
}