const express = require('express')
const { Comment } = require('./../database/models')

const router = express.Router()

router.post('/save', (request, response)=> {
    var comment = new Comment({
        title:   request.body.title,
        content: request.body.content,
        author:  request.body.author,
        post:    request.body.post
    })

    comment.save().then((comment)=> {
        response.status(200).json(comment)
    }).catch((error)=> {
        response.status(400).json(error)
    })
})

router.get('/all', (request, response)=> {
    Comment.find({}).then((comments)=> {
        response.status(200).json(comments)
    }).catch((error)=> {
        response.status(400).json(error)
    })
})

module.exports = router
