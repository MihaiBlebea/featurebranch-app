import {
    FormInput,
    FormSelect,
    FormTextarea } from './../../Components'

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
            label: 'Select author',
            value: state.author,
            name: 'author',
            options: state.authors || null,
            component: FormSelect,
            error: state.errors.author
        },
        {
            label: 'Is published',
            value: state.isPublished,
            name: 'isPublished',
            options: state.publishOptions || null,
            component: FormSelect,
            error: state.errors.publish
        },
        {
            label: 'Post content',
            value: state.content,
            name: 'content',
            component: FormTextarea,
            error: state.errors.content
        },
    ]
}
