import React from 'react'
import axios from 'axios'

import { TitleMain, CardManageContent } from './../../../Components'
import { DefaultLayout } from './../../../Layouts'


class ManageCommentsPage extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            comments: null
        }
    }

    componentDidMount()
    {
        this.fetchComments()
    }

    fetchComments()
    {
        axios.get('comment/all').then((result)=> {
            if(result.status === 200)
            {
                this.setState({
                    comments: result.data
                })
            }
        }).catch((error)=> {
            console.log(error)
        })
    }

    handleApproveStatus(comment)
    {
        let status = !comment.isApproved
        let url = 'comment/approve/' + comment._id + '?status=' + status
        axios.get(url).then((result)=> {
            if(result.status === 200)
            {
                this.fetchComments()
            }
        }).catch((error)=> {
            console.log(error)
        })
    }

    createCommentCards()
    {
        if(this.state.comments !== null)
        {
            return this.state.comments.map((comment, index)=> {
                return (
                    <div className="mb-3" key={ 'comment_' + index }>
                        <CardManageContent delete={ ()=> this.handleApproveStatus(index) }>

                            <div className="inline-flex">
                                <div className="mr-3">{ comment.subject }</div>
                                <div className="mr-3">{ comment.author } comments</div>
                            </div>
                        </CardManageContent>
                    </div>
                )
            })
        }
        return null
    }

    render()
    {
        return (
            <DefaultLayout>
                <TitleMain>Manage comments</TitleMain>
                { this.createCommentCards() }
            </DefaultLayout>
        )
    }
}

export default ManageCommentsPage
