import React from 'react'
import axios from 'axios'

import { TitleMain, TableComments, CardDefault } from './../../../Components'
import { DefaultLayout } from './../../../Layouts'
import { withDataComments } from './../../../HOC'


const ManageCommentsPage = (props)=> {
    const transformData = (data)=> {
        if(data)
        {
            return data.map((item)=> {
                return {
                    _id: item._id,
                    title: item.title,
                    content: item.content,
                    author: item.author,
                    status: item.isApproved,
                    post: item.post
                }
            })
        }
        return null
    }

    return (
        <DefaultLayout>
            <TitleMain>Manage comments</TitleMain>
            <CardDefault>
                <TableComments data={ transformData(props.comments) }
                               refreshComments={ props.refreshComments } />
            </CardDefault>
        </DefaultLayout>
    )
}

export default withDataComments(ManageCommentsPage)
