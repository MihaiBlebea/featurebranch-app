
export const schema = (state, props)=>
{
    return [
        {
            label: 'First name',
            value: state.firstName,
            name: 'firstName',
            type: 'text',
            error: props.errors.firstName
        },
        {
            label: 'Last name',
            value: state.lastName,
            name: 'lastName',
            type: 'text',
            error: props.errors.lastName
        },
        {
            label: 'Email',
            value: state.email,
            name: 'email',
            type: 'email',
            error: props.errors.email
        },
        {
            label: 'Phone',
            value: state.phone,
            name: 'phone',
            type: 'text',
            error: ''
        },
        {
            label: 'Password',
            value: state.password,
            name: 'password',
            type: 'password',
            error: props.errors.password
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
