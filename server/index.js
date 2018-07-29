const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()

const PORT = 8080;

const app = express();

app.use('/uploads', express.static('uploads'))
app.use(cors())
app.use(bodyParser.json())
app.use(require('./controllers'))


app.listen(PORT, ()=> {
    console.log(`app started on port ${PORT}`)
})
