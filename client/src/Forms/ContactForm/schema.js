import { FormInput, FormTextarea } from './../../Components'

export const schema = (state)=> {
    return [
        {
            label: 'Subject',
            value: state.subject,
            name: 'subject',
            component: FormInput,
            error: state.errors.subject
        },
        {
            label: 'Email',
            value: state.email,
            name: 'email',
            type: 'email',
            component: FormInput,
            error: state.errors.email
        },
        {
            label: 'Message',
            value: state.content,
            name: 'content',
            component: FormTextarea,
            error: state.errors.content
        }
    ]
}
