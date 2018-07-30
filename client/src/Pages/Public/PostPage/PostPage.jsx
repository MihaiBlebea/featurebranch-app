import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

import { TitleMain, CardAuthor, MarkdownPreview } from './../../../Components'
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

        // console.log('CATEGORY', this.props.match.params.category)
        // console.log('POST', this.props.match.params.post)
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

    createCardAuthor()
    {
        return (this.state.post) ? <CardAuthor name={ this.createAuthorFullName() } /> : null
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
                return null
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

    createAuthorFullName()
    {
        if(this.state.post !== null)
        {
            return this.state.post.author.first_name + ' ' + this.state.post.author.last_name
        }
        return null
    }

    createPublishDate()
    {
        return (this.state.post) ? this.state.post.publishDate : null
    }

    createCommentsCount()
    {
        return (this.state.post) ? this.state.post.comments.length : 0
    }

    render()
    {
        return (
            <div>
                <DefaultLayout col={ 8 } horizontalCenter>
                    <div className="mb-5">
                        { this.createCardAuthor() }
                    </div>

                    <TitleMain>{ this.createPostTitle() }</TitleMain>

                    <div className="mb-5">
                        <img className="w-100 mb-2" src={ this.createPostImage() } alt="post-main" />
                        <div className="row small">
                            <div className="col-md-6">
                                { this.createAuthorFullName() } | { this.createPublishDate() }
                            </div>
                            <div className="col">
                                <span className="float-md-right">{ this.createCommentsCount() } comments</span>
                            </div>
                        </div>
                    </div>

                    <MarkdownPreview markdown={ this.createPostContent() } />
                </DefaultLayout>

                <div className="bg-light">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="card card-body mt-4">
                                    { this.createCommentForm() }
                                </div>
                                <hr />
                                <div className="mb-5">
                                    { this.createPostComments() }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

PostPage.propTypes = {

}

export default PostPage
