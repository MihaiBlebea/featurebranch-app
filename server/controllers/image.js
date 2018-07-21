const express = require('express')
const { Image } = require('./../database/models')
const multer = require('multer')


const router = express.Router()

const storage = multer.diskStorage({
    destination: function(request, file, callback) {
        callback(null, 'uploads/')
    },
    filename: function(request, file, callback) {
        callback(null, file.originalname)
    }
})

const upload = multer({ storage: storage })


router.post('/save', upload.single('image'), (request, response)=> {
    if(request.file)
    {
        Image.create({
            name:      request.file.originalname,
            extension: request.file.mimetype,
            url:       request.protocol + '://' + request.get('host') + '/' + request.file.path
        }).then((image)=> {
            response.status(200).json(image)
        }).catch((error)=> {
            response.status(400).json(error)
        })
    }
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

router.get('/all', (request, response)=> {
    Image.find().then((images)=> {
        response.status(200).json(images)
    }).catch((error)=> {
        response.status(400).json(error)
    })
})


module.exports = router
