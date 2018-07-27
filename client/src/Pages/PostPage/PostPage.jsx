import React from 'react'
import axios from 'axios'
import { TitleMain } from './../../Components'


class CategoryPage extends React.Component
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
            return this.state.post.comments.map((comment)=> {
                return (
                    <div className="card">
                        <div className="card-body">
                            comment example
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
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <TitleMain>{ this.createPostTitle() }</TitleMain>
                    <img className="w-100 my-5" src={ this.createPostImage() } alt="post-main" />
                    <div>
                        { this.createPostContent() }
                    </div>
                    <div className="bg-primary">
                        { this.createPostComments() }
                    </div>
                </div>
            </div>
        )
    }
}

export default CategoryPage
