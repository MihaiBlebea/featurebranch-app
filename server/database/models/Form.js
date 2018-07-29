const connect = require('./../connect')
const validator = require('validator')


const FormSchema = connect.Schema({
    subject: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: (value)=> {
                return validator.isEmail(value)
            },
            message: `{VALUE} is not a valid email`
        }
    },
    content: {
        type: String,
        required: true
    }
})

FormSchema.methods.toJSON = function() {
    var formObject = this.toObject()
    return {
        _id:     formObject._id,
        subject: formObject.subject,
        email:   formObject.email,
        content: formObject.content,
    }
}

const Form = connect.model('Form', FormSchema)

module.exports = Form
