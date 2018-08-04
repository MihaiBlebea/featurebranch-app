import React from 'react'
import { TitleMain, CardDefault } from './../../../Components'
import { PostForm } from './../../../Forms'
import { DefaultLayout } from './../../../Layouts'

const NewPostPage = (props)=> {
    const parseQueryParams = ()=> {
        if(props.location.search !== '')
        {
            const params = new URLSearchParams(props.location.search)
            return params.get('edit')
        }
    }

    return (
        <DefaultLayout>
            <TitleMain>Post Page</TitleMain>
            <div class="flex flex-wrap">
                <div class="w-2/3 ml-auto mx-auto">
                    <PostForm editPost={ parseQueryParams() }/>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default NewPostPage
