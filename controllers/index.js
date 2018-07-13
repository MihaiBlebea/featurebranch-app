const express = require('express')


const router = express.Router()

router.use('/user', require('./user'))

router.use('/post', require('./post'))

router.use('/category', require('./category'))

router.use('/image', require('./image'))

router.get('/', (request, response)=> {
    response.json({response: 'App works'})
})

module.exports = router
