export const schema = (state)=> {
    return [
        {
            label: 'Email',
            value: state.email,
            name: 'email',
            type: 'email'
        },
        {
            label: 'Password',
            value: state.password,
            name: 'password',
            type: 'password'
        }
    ]
}
