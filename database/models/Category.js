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
    main_image: {
        type: connect.Schema.Types.ObjectId,
        ref: 'Image',
        required: true
    },
    posts: [{
        type: connect.Schema.Types.ObjectId,
        ref: 'Post'
    }]
})

const Category = connect.model('Category', CategorySchema)

module.exports = Category
