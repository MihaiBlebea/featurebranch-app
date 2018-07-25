import {
    FormInput,
    FormTextarea,
    FormImageSelect } from './../../Components'

export const schema = (state)=> {
        return [
            {
                label: 'Choose a title',
                value: state.title,
                name: 'title',
                type: 'text',
                component: FormInput,
                error: state.errors.title
            },
            {
                label: 'Pick a slug',
                value: state.slug,
                name: 'slug',
                type: 'text',
                component: FormInput,
                error: state.errors.slug
            },
            {
                label: 'Category description',
                value: state.description,
                name: 'description',
                component: FormTextarea,
                error: state.errors.description
            },
        ]
    }
