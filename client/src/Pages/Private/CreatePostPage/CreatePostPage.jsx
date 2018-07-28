import React from 'react'
import { TitleMain } from './../../../Components'
import { PostForm } from './../../../Forms'
import { DefaultLayout } from './../../../Layouts'


const CreatePostPage = ()=> {
    return (
        <DefaultLayout>
            <TitleMain>Post Page</TitleMain>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <PostForm />
                </div>
            </div>
        </DefaultLayout>
    )
}

export default CreatePostPage
