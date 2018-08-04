import React from 'react'
import { TitleMain, CardDefault } from './../../../Components'
import { PostForm } from './../../../Forms'
import { DefaultLayout } from './../../../Layouts'
import { withEdit } from './../../../HOC'


const NewPostPage = (props)=> {
    return (
        <DefaultLayout>
            <TitleMain>Post Page</TitleMain>
            <div className="flex flex-wrap">
                <div className="w-2/3 ml-auto mx-auto">
                    <PostForm editId={ props.getEditId }/>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default withEdit(NewPostPage)
