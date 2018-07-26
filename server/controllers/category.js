const express = require('express')
const { Category } = require('./../database/models')
const { auth } = require('./../middleware/auth')

const router = express.Router()

router.post('/save', auth, (request, response)=> {
    var category = new Category({
        title:       request.body.title,
        slug:        request.body.slug,
        description: request.body.description,
        main_image:  request.body.main_image
    })
    category.save().then((result)=> {
        response.status(200).json(result)
    }).catch((error)=> {
        response.status(400).json(error)
    })
})

router.get('/all', (request, response)=> {
    Category.find({})
            .populate('main_image')
            .populate('posts')
            .exec((error, category)=> {
                if(error) throw error
                response.status(200).json(category)
            })
})

router.get('/:slug', (request, response)=> {
    Category.findOne({ slug: request.params.slug })
            .populate('main_image')
            .populate('posts')
            .exec((error, category)=> {
                if(error) throw error
                response.status(200).json(category)
            })
})

router.delete('/delete/:slug', (request, response)=> {
    Category.deleteOne({ slug: request.params.slug }).then((result)=> {
        response.status(200).json({ response: `Category ${request.params.slug} deleted` })
    }).catch((error)=> {
        response.status(400).json(error)
    })
})

// Get author's posts //

// Edit a post //


module.exports = router
