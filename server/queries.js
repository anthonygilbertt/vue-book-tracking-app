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


module.exports = {
    getStatuses,
    getStatusesById,
    // createUser,
    // updateUser,
    // deleteUser,
}