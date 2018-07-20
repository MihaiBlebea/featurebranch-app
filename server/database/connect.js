const mongoose = require('mongoose');
const paginate = require('mongoose-paginate')

const url = process.env.MONGO_DB_URL
const database = process.env.MONGO_DB_NAME

// Setup
mongoose.Promise = global.Promise;
mongoose.plugin(paginate);

mongoose.connect(url + '/' + database).catch((error)=> {
    console.log(error)
})

module.exports = mongoose
