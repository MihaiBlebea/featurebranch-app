const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const User = require('./database/models/User')

const app = express();

app.use(cors())
app.use(bodyParser.json())
app.use(require('./controllers'))


app.listen(3000, ()=> {
    console.log('app started on port 3000')
})
