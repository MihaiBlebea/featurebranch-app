import React from 'react'
import { TitleMain } from './../../../Components'
import { PostForm } from './../../../Forms'


const CreatePostPage = (props)=> {
    const parseQueryParams = ()=> {
        if(props.location.search !== '')
        {
            const params = new URLSearchParams(props.location.search)
            return params.get('edit')
        }
    }

    return (
        <div className="container mx-auto">
            <TitleMain>Post Page</TitleMain>

            <PostForm editPost={ parseQueryParams() }/>
        </div>
    )
}

export default CreatePostPage
