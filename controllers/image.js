const express = require('express')
const { Image } = require('./../database/models')

const router = express.Router()

router.post('/save', (request, response)=> {
    Image.create({
        name:      request.body.name,
        extension: request.body.extension,
        url:       request.body.url
    }).then((image)=> {
        response.status(200).json(image)
    }).catch((error)=> {
        response.status(400).json(error)
    })
})

router.delete('/delete/:id', (request, response)=> {
    Image.deleteOne({ _id: request.params.id }).then((result)=> {
        response.status(200).json({ response: `Image ${request.params.id} deleted` })
    }).catch((error)=> {
        console.log(error)
    })
})

router.get('/', (request, response)=> {
    if(request.query.id)
    {
        Image.findOne({ _id: request.query.id }).then((image)=> {
            response.status(200).json(image)
        }).catch((error)=> {
            response.status(400).json(error)
        })
    }
})


module.exports = router
