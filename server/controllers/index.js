const express = require('express')


const router = express.Router()

const version = '/api/v1'

router.use(version + '/user', require('./user'))

router.use(version + '/post', require('./post'))

router.use(version + '/category', require('./category'))

router.use(version + '/image', require('./image'))

router.use(version + '/comment', require('./comment'))

router.use(version + '/form', require('./form'))

router.get('/', (request, response)=> {
    response.json({response: 'App works great'})
})

module.exports = router
