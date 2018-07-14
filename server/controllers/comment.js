const express = require('express')
const { Comment } = require('./../database/models')

const router = express.Router()

router.post('/save', (request, response)=> {
    Comment.create({
        title:   request.body.title,
        content: request.body.content,
        author:  request.body.author
    }).then((comment)=> {
        response.status(200).json(comment)
    }).catch((error)=> {
        response.status(400).json(error)
    })
})
