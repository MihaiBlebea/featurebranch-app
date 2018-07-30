const express = require('express')
const { Form } = require('./../database/models')
const { auth } = require('./../middleware/auth')

const router = express.Router()

router.post('/save', (request, response)=> {
    var form = new Form({
        subject: request.body.subject,
        email:   request.body.email,
        content: request.body.content
    })
    form.save().then((result)=> {
        response.status(200).json(result)
    }).catch((error)=> {
        console.log(error)
        response.status(400).json(error)
    })
})

router.get('/all', auth, (request, response)=> {
    Form.find({}).then((forms)=> {
        response.status(200).json(forms)
    }).catch((error)=> {
        response.status(400).json(error)
    })
})

router.get('/:id', auth, (request, response)=> {
    Form.findOne({ slug: request.params.id }).then((form)=> {
        response.status(200).json(form)
    }).catch((error)=> {
        response.status(400).json(error)
    })
})

router.delete('/delete/:id', (request, response)=> {
    Form.deleteOne({ _id: request.params.id }).then((result)=> {
        response.status(200).send()
    }).catch((error)=> {
        response.status(400).json(error)
    })
})


module.exports = router
