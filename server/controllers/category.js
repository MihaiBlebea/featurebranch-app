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
    Category.find({}).then((categories)=> {
        response.status(200).json(categories)
    }).catch((error)=> {
        response.status(400).json(error)
    })
})

router.get('/:slug', (request, response)=> {
    Category.findOne({ slug: request.params.slug }).then((category)=> {
        response.status(200).json(category)
    }).catch((error)=> {
        response.status(400).json(error)
    })
})

router.delete('/delete/:id', auth, (request, response)=> {
    Category.deleteOne({ _id: request.params.id }).then((result)=> {
        response.status(200).send()
    }).catch((error)=> {
        response.status(400).json(error)
    })
})

// Get author's posts //

// Edit a post //


module.exports = router
