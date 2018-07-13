const connect = require('./../connect')

const CategorySchema = connect.Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: connect.Schema.Types.ObjectId,
        ref: 'Image',
        required: true
    }
})

const Category = connect.model('Category', CategorySchema)

module.exports = Category
