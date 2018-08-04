import React from 'react'
import axios from 'axios'

import { TitleMain, CardManageContent } from './../../../Components'
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
        axios.get('post/all').then((result)=> {
            this.setState({
                posts: result.data
            })
        }).catch((error)=> {
            console.log(error)
        })
    }

    handlePostPreview(post)
    {
        this.props.history.push('/admin/preview/' + post.slug)
    }

    handleEditPost(post)
    {
        this.props.history.push('/admin/post?edit=' + post.id)
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
                    <div className="w-1/2 mb-4 h-12 px-2" key={ 'card_post_' + index }>
                        <CardManageContent view={ ()=> this.handlePostPreview(post) }
                                           edit={ ()=> this.handleEditPost(post) }
                                           delete={ ()=> this.handlePostDelete(index) }>

                            <div className="inline-flex">
                                <div className="mr-3">{ post.title }</div>
                                <div className="mr-3">{ post.comments.length } comments</div>
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
                <TitleMain>Manage posts</TitleMain>
                <div className="flex flex-wrap -mx-2">
                    { this.createPosts() }
                </div>
            </DefaultLayout>
        )
    }
}

export default ManagePostsPage
