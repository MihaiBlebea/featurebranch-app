const connect = require('./../connect')
const validator = require('validator')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')


const salt = 'featurebranchsalt007430043'

const UserSchema = new connect.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate: {
            validator: (value)=> {
                return validator.isEmail(value)
            },
            message: `{VALUE} is not a valid email`
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    phone: {
        type: String
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
})


// Middleware save bcrypted password //
UserSchema.pre('save', function(next) {
    var user = this
    if(user.isModified('password'))
    {
        bcrypt.genSalt(10, (error, salt)=> {
            bcrypt.hash(user.password, salt, (error, hashedPassword)=> {
                user.password = hashedPassword
                next()
            })
        })
    } else {
        next()
    }
})

// Hide or show only specific attributes of the model //
UserSchema.methods.toJSON = function() {
    var userObject = this.toObject()
    return {
        first_name: userObject.first_name,
        last_name: userObject.last_name,
        email: userObject.email,
        phone: userObject.phone
    }
}

// Get user by token //
UserSchema.statics.findByToken = function(token) {
    var decoded;
    try {
        decoded = jwt.verify(token, salt)
    } catch(error) {
        return Promise.reject()
    }
    return this.findOne({
        '_id': decoded._id,
        'tokens.token': token,
        'tokens.access': 'auth'
    }).then((user)=> {
        return user
    })
}

// Get user by email and password //
UserSchema.statics.findByCredentials = function(email, password) {
    var User = this
    return User.findOne({ email: email }).then((user)=> {
        if(!user)
        {
            return Promise.reject()
        }

        return new Promise((resolve, reject)=> {
            bcrypt.compare(password, user.password, (error, result)=> {
                if(result)
                {
                    resolve(user)
                } else {
                    reject()
                }
            })
        })
    })
}

// Detele user's token //
UserSchema.methods.deleteToken = function(token) {
    return this.update({
        $pull: {
            tokens: {
                token: token
            }
        }
    })
}

// Generate a new JWT token for the user //
UserSchema.methods.generateJWT = function() {
    var access = 'auth'
    var token = jwt.sign({ _id: this._id.toHexString(), access }, salt).toString()
    this.tokens.push({ access: access, token: token })
    return this.save().then(()=> {
        return token
    })
}

var User = connect.model('User', UserSchema)

module.exports = User
