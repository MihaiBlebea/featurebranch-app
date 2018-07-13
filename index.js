const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const User = require('./database/models/User')

const PORT = 3000;

const app = express();

app.use(cors())
app.use(bodyParser.json())
app.use(require('./controllers'))


app.listen(PORT, ()=> {
    console.log(`app started on port ${PORT}`)
})
