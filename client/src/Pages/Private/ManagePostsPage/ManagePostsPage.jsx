import React from 'react'

import { TitleMain, TablePosts, CardDefault } from './../../../Components'
import { DefaultLayout } from './../../../Layouts'
import { withDataPosts } from './../../../HOC'


const ManagePostsPage = (props)=> {
    const transformData = (data)=> {
        if(data)
        {
            return data.map((item)=> {
                return {
                    _id: item._id,
                    title: item.title,
                    slug: item.slug,
                    comments: item.comments.length,
                    author: item.author.first_name + ' ' + item.author.last_name
                }
            })
        }
        return null
    }

    return (
        <DefaultLayout>
            <TitleMain>Manage posts</TitleMain>
            <CardDefault>
            <TablePosts data={ transformData(props.posts) }
                        refreshPosts={ props.refreshPosts } />
            </CardDefault>
        </DefaultLayout>
    )
}

export default withDataPosts(ManagePostsPage)
