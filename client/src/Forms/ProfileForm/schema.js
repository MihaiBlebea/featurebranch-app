import { FormTextarea } from './../../Components'

export const schema = (state)=>
{
    return [
        {
            label: 'First name',
            value: state.firstName,
            name: 'firstName',
            type: 'text',
            error: state.errors.firstName
        },
        {
            label: 'Last name',
            value: state.lastName,
            name: 'lastName',
            type: 'text',
            error: state.errors.lastName
        },
        {
            label: 'Email',
            value: state.email,
            name: 'email',
            type: 'email',
            error: state.errors.email
        },
        {
            label: 'Phone',
            value: state.phone,
            name: 'phone',
            type: 'text',
            error: ''
        },
        {
            label: 'Description',
            value: state.description,
            name: 'description',
            component: FormTextarea,
            error: state.errors.description
        },
        {
            label: 'Password',
            value: state.password,
            name: 'password',
            type: 'password',
            error: state.errors.password
        },
        {
            label: 'Confirm password',
            value: state.passwordAgain,
            name: 'passwordAgain',
            type: 'password',
            error: ''
        }
    ]
}
