import React from 'react'
import axios from 'axios'

import { TitleMain, CardPost } from './../../../Components'
import { DefaultLayout } from './../../../Layouts'


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
        axios.get(process.env.REACT_APP_API_ROOT + `post/all`).then((result)=> {
            this.setState({
                posts: result.data
            })
        }).catch((error)=> {
            console.log(error)
        })
    }

    handlePostDelete(post)
    {
        axios.delete(process.env.REACT_APP_API_ROOT + `post/delete/${post._id}`).then((result)=> {
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
            <div>
                <DefaultLayout>
                    <TitleMain>Manage posts</TitleMain>
                    <div className="row">
                        { this.createPosts() }
                    </div>
                </DefaultLayout>
            </div>
        )
    }
}

export default ManagePostsPage
