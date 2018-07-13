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
    comments: [{
        //
    }],
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
})

const Post = connect.model('Post', PostSchema)

module.exports = Post
