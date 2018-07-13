const connect = require('./../connect')

const CommentSchema = connect.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: connect.Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Comment = connect.model('Comment', CommentSchema)

module.exports = Comment
