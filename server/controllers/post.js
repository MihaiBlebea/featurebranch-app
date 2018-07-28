const express = require('express')
const { Post, User } = require('./../database/models')

const router = express.Router()

// Save a Post
router.post('/save', (request, response)=> {
    var post = new Post({
        title:        request.body.title,
        slug:         request.body.slug,
        content:      request.body.content,
        main_image:   request.body.main_image,
        category:     request.body.category,
        comments:     request.body.comments,
        author:       request.body.author,
        is_published: request.body.is_published,
        publish_date: request.body.publish_date
    })

    post.save().then((result)=> {
        response.status(200).json(result)
    }).catch((error)=> {
        response.status(400).json(error)
    })
})

router.get('/all', (request, response)=> {
    Post.find({}).then((posts)=> {
        response.status(200).json(posts)
    }).catch((error)=> {
        response.status(400).json(error)
    })
})

// Get a post
router.get('/:slug', (request, response)=> {
    Post.findOne({ slug: request.params.slug }).then((post)=> {
        response.status(200).json(post)
    }).catch((error)=> {
        response.status(400).json(error)
    })
})

router.delete('/delete/:id', (request, response)=> {
    Post.deleteOne({ _id: request.params.id }).then((result)=> {
        response.status(200).json({ response: `Post was deleted` })
    }).catch((error)=> {
        console.log(error)
        response.status(400).json(error)
    })
})


module.exports = router
