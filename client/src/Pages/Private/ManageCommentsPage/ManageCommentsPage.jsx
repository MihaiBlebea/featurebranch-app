import React from 'react'

import axios from 'axios'
import { TitleMain, CardComment } from './../../../Components'


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
                        <CardComment author={ 'Serban' }
                                     subject={ comment.title }
                                     content={ comment.content }
                                     isApproved={ comment.isApproved }
                                     onApproveChange={ ()=> this.handleApproveStatus(comment) }/>
                    </div>
                )
            })
        }
        return null
    }

    render()
    {
        return (
            <div className="container mx-auto">
                <TitleMain>Manage comments</TitleMain>
                { this.createCommentCards() }
            </div>
        )
    }
}

export default ManageCommentsPage
