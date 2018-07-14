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

CategorySchema.methods.toJSON = function() {
    var categoryObject = this.toObject()
    return {
        _id:         categoryObject._id,
        title:       categoryObject.title,
        slug:        categoryObject.slug,
        description: categoryObject.description,
        main_image:  categoryObject.main_image,
        posts:       categoryObject.posts
    }
}

const Category = connect.model('Category', CategorySchema)

module.exports = Category
