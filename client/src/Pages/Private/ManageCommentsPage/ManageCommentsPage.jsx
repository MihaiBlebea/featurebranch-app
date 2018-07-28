import React from 'react'
import axios from 'axios'

import { TitleMain } from './../../../Components'


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
        axios.get(process.env.REACT_APP_API_ROOT + 'comment/all').then((result)=> {
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

    createCommentCards()
    {
        if(this.state.comments !== null)
        {
            return this.state.comments.map((comment)=> {
                return (
                    <div className="card">
                        <div className="card-body">
                            <div className='row'>
                                <div className="col-md-4">
                                    Author image
                                </div>
                                <div className="col">
                                    { comment.content }
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        return null
    }

    render()
    {
        return (
            <div>
                <TitleMain>Manage comments</TitleMain>
                { this.createCommentCards() }
            </div>
        )
    }
}

export default ManageCommentsPage
