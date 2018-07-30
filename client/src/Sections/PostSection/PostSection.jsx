import React from 'react'
// import axios from 'axios'
import { withRouter } from 'react-router'
import random from 'randomstring'

import { axios } from './../../axios'
import { CardFrontPost } from './../../Components'


class PostSection extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            posts: null
        }
    }

    componentDidMount()
    {
        this.fetchPosts()
    }

    fetchPosts()
    {
        axios.get('post/all').then((result)=> {
            if(result.status === 200)
            {
                this.setState({
                    posts: result.data
                })
            }
        }).catch((error)=> {
            console.log(error)
        })
    }

    handleClickAction(post)
    {
        this.props.history.push(`/blog`)
    }

    createLatestPosts()
    {
        if(this.state.posts !== null)
        {
            return this.state.posts.map((post)=> {
                return (
                    <div className="mb-4" key={ random.generate(6) }>
                        <CardFrontPost imageUrl={ post.main_image.url }
                                       title={ post.title }
                                       content={ post.content }
                                       author={ post.author.first_name + ' ' + post.author.last_name }
                                       publishDate={ '20.08.2018' }
                                       commentsCount={ post.comments.length }
                                       onClickAction={ ()=> this.handleClickAction(post) }/>
                    </div>
                )
            })
        }
    }

    render()
    {
        return (
            <div className="my-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-sm-12">
                            { this.createLatestPosts() }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(PostSection)
