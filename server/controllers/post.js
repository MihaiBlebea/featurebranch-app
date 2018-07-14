const express = require('express')
const { Post, User } = require('./../database/models')

const router = express.Router()

// Save a Post
router.post('/save', (request, response)=> {
    var payload = {
        title:        request.body.title,
        slug:         request.body.slug,
        content:      request.body.content,
        main_image:   request.body.main_image,
        comments:     request.body.comments,
        author:       request.body.author,
        is_published: request.body.is_published,
        publish_date: request.body.publish_date
    }
    Post.create(payload).then((post)=> {
        response.status(200).json({
            response: 'Posthave been saved to the database',
            model: post
        })
    }).catch((error)=> {
        console.log(error)
    })
})

// Get a post
router.get('/:slug', (request, response)=> {
    Post.findOne({ slug: request.params.slug })
        .populate('author')
        .populate('main_image')
        .populate('comments')
        .exec((error, post)=> {
            if(error) throw err;
            response.status(200).json(post)
        })
})

module.exports = router
