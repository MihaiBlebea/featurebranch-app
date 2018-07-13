const connect = require('./../connect')

const ImageSchema = connect.Schema({
    name: {
        type: String,
        required: true
    },
    extension: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
})

const Image = connect.model('Image', ImageSchema)

module.exports = Image
