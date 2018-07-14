const express = require('express')
const { Category } = require('./../database/models')


const router = express.Router()

router.post('/save', (request, response)=> {
    Category.create({
        title:       request.body.title,
        slug:        request.body.slug,
        description: request.body.description,
        main_image:  request.body.main_image
    }).then((category)=> {
        response.status(200).json(category)
    }).catch((error)=> {
        response.status(400).json(error)
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


module.exports = router
