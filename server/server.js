const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const db = require('./queries')
const cors = require('cors');
const bcrypt = require('bcrypt')
const flash = require('express-flash')
const session = require('express-session')
const initializePassport = require('./passport-setup')
const passport = require('passport')
initializePassport(passport, email => {
    return users.find(user => user.email === email)
})

require('dotenv').config()

let users = [];

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.use(express.urlencoded({ extended: false }))
app.use(cors());
app.use(flash());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize())
app.use(passport.session())

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/getStatuses', db.getStatuses)
app.get('/getStatusesById', db.getStatusesById)
app.get('/getBooks', db.getBooks)
app.post('/createBook', db.createBook)
app.post('/signup', async(req, res) => {
    console.log('req: ', req);
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(),
            name: req.body.username,
            email: req.body.email,
            password: hashedPassword
        })

    } catch (error) {
        console.log('error: ', error);
    }
    console.log('user: ', users);

})
app.post('/login', async(req, res) => {
    console.log('req: ', req);
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(),
            name: req.body.username,
            email: req.body.email,
            password: hashedPassword
        })

    } catch (error) {
        console.log('error: ', error);
    }

    console.log('user: ', users);

})

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})