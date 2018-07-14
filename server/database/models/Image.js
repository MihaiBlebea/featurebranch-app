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
        required: true,
        unique: true
    }
})

ImageSchema.methods.toJSON = function() {
    var imageObject = this.toObject()
    return {
        _id:       imageObject._id,
        name:      imageObject.name,
        extension: imageObject.extension,
        url:       imageObject.url
    }
}

const Image = connect.model('Image', ImageSchema)

module.exports = Image
