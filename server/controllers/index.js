const express = require('express')


const router = express.Router()

router.use('/api/v1/user', require('./user'))

router.use('/api/v1/post', require('./post'))

router.use('/api/v1/category', require('./category'))

router.use('/api/v1/image', require('./image'))

router.get('/', (request, response)=> {
    response.json({response: 'App works great'})
})

module.exports = router
