const connect = require('./../connect')

const PostSchema = connect.Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    content: {
        type: String,
        required: true
    },
    main_image: {
        type: connect.Schema.Types.ObjectId,
        ref: 'Image',
        required: true
    },
    author: {
        type: connect.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    category: {
        type: connect.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    // comments: [{
    //     type: connect.Schema.Types.ObjectId,
    //     ref: 'Comment'
    // }],
    author: {
        type: connect.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    is_published: {
        type: Boolean,
        required: true
    },
    publish_date: {
        type: Date
    }
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
})

PostSchema.virtual('comments', {
    ref: 'Comment',
    localField: '_id',
    foreignField: 'post'
})

PostSchema.methods.toJSON = function() {
    var postObject = this.toObject()
    return {
        _id:          postObject._id,
        title:        postObject.title,
        slug:         postObject.slug,
        main_image:   postObject.main_image,
        comments:     postObject.comments,
        content:      postObject.content,
        author:       postObject.author,
        is_published: postObject.is_published,
        publish_date: postObject.publish_date
    }
}

PostSchema.pre('findOne', autoPopulate)

PostSchema.pre('find', autoPopulate)

function autoPopulate(next)
{
    this.populate('main_image')
    this.populate('author', ['_id', 'first_name', 'last_name'])
    this.populate('comments')
    next()
}


const Post = connect.model('Post', PostSchema)

module.exports = Post
