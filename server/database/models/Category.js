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
    }
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
})

CategorySchema.virtual('posts', {
    ref: 'Post',
    localField: '_id',
    foreignField: 'category'
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

CategorySchema.pre('findOne', autoPopulate)

CategorySchema.pre('find', autoPopulate)

function autoPopulate(next)
{
    this.populate('main_image')
    this.populate('posts')
    next()
}

const Category = connect.model('Category', CategorySchema)

module.exports = Category
