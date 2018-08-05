import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

import {
    TitleMain,
    CardAuthor,
    MarkdownPreview,
    CardComment } from './../../../Components'
import { CommentForm } from './../../../Forms'
import { DefaultLayout, CentralContent } from './../../../Layouts'


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
        axios.get('post/' + this.props.match.params.post).then((result)=> {
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
        if(this.state.post)
        {
            return (
                <CardAuthor title={ this.createAuthorFullName() } />
            )
        }
        return null
    }

    createMainImage()
    {
        if(this.state.post)
        {
            return (
                <img src={ this.state.post.main_image.url } alt="main" />
            )
        }
    }

    createPostComments()
    {
        if(this.state.post !== null)
        {
            return this.state.post.comments.map((comment, index)=> {
                if(comment.isApproved === true)
                {
                    return (
                        <CardComment author={ comment.author }
                                     subject={ comment.title }>
                            { comment.content }
                        </CardComment>
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
                <CentralContent>
                    { this.createCardAuthor() }
                    <TitleMain>{ this.createPostTitle() }</TitleMain>
                    { this.createMainImage() }
                    <div className="mt-2 mb-10">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-1/2">
                                { this.createAuthorFullName() } | { this.createPublishDate() }
                            </div>
                            <div className="w-1/2">
                                <span className="float-right">{ this.createCommentsCount() } comments</span>
                            </div>
                        </div>
                    </div>
                    <MarkdownPreview markdown={ this.createPostContent() } />
                </CentralContent>

                <div className="bg-smoke">
                    <CentralContent>
                        { this.createCommentForm() }
                        { this.createPostComments() }
                    </CentralContent>
                </div>
            </div>
        )
    }
}

PostPage.propTypes = {

}

export default PostPage
