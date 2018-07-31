const { User } = require('./../database/models')

var authenticate = (request, response, next)=> {
    // var token = request.query.auth_token
    var token = request.headers.authorization
    User.findByToken(token).then((user)=> {
        if(!user)
        {
            return Promise.reject()
        }
        request.user = user
        request.token = token
        next()
    }).catch((error)=> {
        console.log(error)
        response.status(401).send()
    })
}

module.exports = {
    auth: authenticate
}
