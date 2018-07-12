const express = require('express')


const router = express.Router()

router.use('/user', require('./user'))

router.get('/', (request, response)=> {
    response.json({response: 'App works'})
})

module.exports = router
