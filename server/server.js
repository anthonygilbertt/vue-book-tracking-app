const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const db = require('./queries')
const cors = require('cors');
require('dotenv').config()

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.use(cors());

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

// app.post('/results', (request, response) => {
// app.post('/posts', (request, response) => {
//     // response.json('request: ', request)
//     // response.json('response: ', response)
//     console.log('request: ', request);
//     // response.status(200).json('bloop')
//     // response.json.parse(request)
// })

app.get('/getStatuses', db.getStatuses)
app.get('/getStatusesById', db.getStatusesById)
app.get('/getBooks', db.getBooks)
app.post('/createBook', db.createBook)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})