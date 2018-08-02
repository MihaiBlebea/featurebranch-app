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
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <PostForm editPost={ parseQueryParams() }/>
                </div>
            </div>
        </div>
    )
}

export default CreatePostPage
