const express = require('express')
const { User } = require('./../database/models')
const { auth } = require('./../middleware/auth')

const router  = express.Router()


router.post('/signup', (request, response)=> {
    var payload = {
        first_name: request.body.first_name,
        last_name:  request.body.last_name,
        phone:      request.body.phone,
        email:      request.body.email,
        password:   request.body.password
    }
    var user = new User(payload)
    user.save().then(()=> {
        return user.generateJWT()
    }).then((token)=> {
        response.status(200).json({
            token: token,
            expire: process.env.TOKEN_EXPIRE_PERIOD,
            user: user
        })
    }).catch((error)=> {
        response.status(400).json(error)
    })
})

router.post('/login', (request, response)=> {
    var email = request.body.email
    var password = request.body.password
    User.findByCredentials(email, password).then((user)=> {
        user.generateJWT().then((token)=> {
            response.status(200).json({
                token: token,
                expire: 3600,
                user: user
            })
        })
    }).catch((error)=> {
        response.status(400).json(error)
    })
})

router.get('/all', (request, response)=> {
    User.find({}).then((users)=> {
        response.json(users)
    }).catch((error)=> {
        console.log(error)
    })
})

router.get('/', (request, response)=> {
    if(request.query.email !== null)
    {
        User.findOne({ email: request.query.email }).then((user)=> {
            response.json({ model: user })
        }).catch((error)=> {
            console.log(error)
        })
    }
})

router.get('/:id', auth, (request, response)=> {
    var id = request.params.id
    User.findOne({ _id: id }).then((user)=> {
        response.json({ model: user })
    }).catch((error)=> {
        console.log(error)
    })
})



module.exports = router
