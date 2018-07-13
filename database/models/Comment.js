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

CommentSchema.methods.toJSON = function() {
    var commentObject = this.toObject()
    return {
        _id:     commentObject._id,
        title:   commentObject.title,
        content: commentObject.content,
        author:  commentObject.author,
    }
}

const Comment = connect.model('Comment', CommentSchema)

module.exports = Comment
