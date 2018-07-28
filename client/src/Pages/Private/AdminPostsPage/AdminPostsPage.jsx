import React from 'react'
import axios from 'axios'

import { TitleMain, CardPost } from './../../../Components'


class AdminPostsPage extends React.Component
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
        axios.get(process.env.REACT_APP_API_ROOT + `post/all`).then((result)=> {
            this.setState({
                posts: result.data
            })
        }).catch((error)=> {
            console.log(error)
        })
    }

    handlePostDelete(index)
    {
        let post = this.state.posts[index]
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
                                  onDelete={ ()=> this.handlePostDelete(index) } />
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
                <TitleMain>Manage posts</TitleMain>
                <div className="row">
                    { this.createPosts() }
                </div>
            </div>
        )
    }
}

export default AdminPostsPage
