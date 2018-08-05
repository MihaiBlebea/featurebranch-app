import React from 'react'

import { TitleMain, BlogContent } from './../../../Components'
import { DefaultLayout } from './../../../Layouts'


const BlogPage = ()=> {
    return (
        <DefaultLayout>
            <TitleMain>Blog Page</TitleMain>
            <BlogContent />
        </DefaultLayout>
    )
}

export default BlogPage
