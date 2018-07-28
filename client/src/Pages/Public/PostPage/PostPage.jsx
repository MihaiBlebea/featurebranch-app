import React from 'react'
import axios from 'axios'

import { TitleMain } from './../../../Components'
import { CommentForm } from './../../../Forms'
import { DefaultLayout } from './../../../Layouts'

class PostPage extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            post: null
        }

        console.log('CATEGORY', this.props.match.params.category)
        console.log('POST', this.props.match.params.post)
    }

    componentDidMount()
    {
        this.fetchPost()
    }

    fetchPost()
    {
        axios.get(process.env.REACT_APP_API_ROOT + `post/${this.props.match.params.post}`).then((result)=> {
            this.setState({
                post: result.data
            })
        }).catch((error)=> {
            console.log(error)
        })
    }

    handleCommentFormSubmit()
    {
        this.fetchPost()
    }

    createPostTitle()
    {
        return (this.state.post !== null) ? this.state.post.title : 'Post title'
    }

    createPostContent()
    {
        return (this.state.post !== null) ? this.state.post.content : 'Post content'
    }

    createPostImage()
    {
        if(this.state.post !== null)
        {
            return (this.state.post.main_image) ? this.state.post.main_image.url : null
        }
        return null
    }

    createPostComments()
    {
        if(this.state.post !== null)
        {
            return this.state.post.comments.map((comment, index)=> {
                if(comment.isApproved === true)
                {
                    return (
                        <div className="card mb-3" key={ 'comment_' + index }>
                            <div className="card-body">
                                <strong>{ comment.title }</strong>
                                <p>{ comment.content }</p>
                            </div>
                        </div>
                    )
                }
            })
        }
        return null
    }

    createCommentForm()
    {
        if(this.state.post !== null)
        {
            return (
                <CommentForm postId={ this.state.post._id }
                             onFormSubmit={ ()=> this.handleCommentFormSubmit() } />
            )
        }
        return null
    }

    render()
    {
        return (
            <div>
                <DefaultLayout col={ 8 } horizontalCenter>
                    <TitleMain>{ this.createPostTitle() }</TitleMain>
                    <img className="w-100 my-5" src={ this.createPostImage() } alt="post-main" />
                    { this.createPostContent() }
                </DefaultLayout>

                <div className="bg-light">
                    <DefaultLayout col={ 8 } horizontalCenter>
                        <div className="card card-body mt-4">
                            { this.createCommentForm() }
                        </div>
                        <hr />
                        { this.createPostComments() }
                    </DefaultLayout>
                </div>
            </div>
        )
    }
}

export default PostPage
