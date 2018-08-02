import React from 'react'

import axios from 'axios'
import { TitleMain, CardPost } from './../../../Components'


class ManagePostsPage extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            posts: null,
            confirmation: {
                openModal: false,
                postId: null
            }
        }
    }

    componentDidMount()
    {
        this.fetchPosts()
    }

    fetchPosts()
    {
        axios.get('post/all').then((result)=> {
            this.setState({
                posts: result.data
            })
        }).catch((error)=> {
            console.log(error)
        })
    }

    handlePostDelete(post)
    {
        axios.delete('post/delete/' + post._id).then((result)=> {
            if(result.status === 200)
            {
                this.fetchPosts()
            }
        }).catch((error)=> {
            console.log(error)
        })
    }

    createPosts()
    {
        if(this.state.posts !== null)
        {
            return this.state.posts.map((post, index)=> {
                return (
                    <div className="col-md-4 mb-2" key={ `card-post-${index}` }>
                        <CardPost imageUrl={ (post.main_image) ? post.main_image.url : null }
                                  title={ post.title }
                                  slug={ post.slug }
                                  id={ post._id }
                                  content={ post.content }
                                  author={ post.author.first_name + ' ' + post.author.last_name }
                                  publishDate={ '20.08.2018' }
                                  commentsCount={ post.comments.length }
                                  onDelete={ ()=> this.handlePostDelete(post) } />
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
                <TitleMain>Manage posts</TitleMain>
                <div className="row">
                    { this.createPosts() }
                </div>
            </div>
        )
    }
}

export default ManagePostsPage
