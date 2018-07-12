const mongoose = require('mongoose');
const paginate = require('mongoose-paginate')
const config = require('config')

const url = config.get('mongo_database.url');
const database = config.get('mongo_database.database');

// Setup
mongoose.Promise = global.Promise;
mongoose.plugin(paginate);

mongoose.connect(url + '/' + database)

module.exports = mongoose
