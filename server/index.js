const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const User = require('./database/models/User')

const PORT = 8080;

const app = express();

app.use(cors({ exposedHeaders: 'x-auth' }))
app.use(bodyParser.json())
app.use(require('./controllers'))


app.listen(PORT, ()=> {
    console.log(`app started on port ${PORT}`)
})
