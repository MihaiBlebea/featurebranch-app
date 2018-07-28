import React from 'react'
import { TitleMain } from './../../../Components'
import { PostForm } from './../../../Forms'

const CreatePostPage = ()=> {
    return (
        <div>
            <TitleMain>Post Page</TitleMain>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <PostForm />
                </div>
            </div>
        </div>
    )
}

export default CreatePostPage
