import React from 'react'
import axios from 'axios'

import { TitleMain, CardFrontPost } from './../../Components'


class CategoryPage extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            posts: null,
            categorySlug: this.props.match.params.category
        }
    }

    componentDidMount()
    {
        this.fetchPosts()
    }

    fetchPosts()
    {
        axios.get(process.env.REACT_APP_API_ROOT + 'post/all').then((result)=> {
            this.setState({
                posts: result.data
            })
        }).catch((error=> {
            console.log(error)
        }))
    }

    handleClickAction(post)
    {
        this.props.history.push('/blog/' + this.state.categorySlug + '/' + post.slug)
    }

    createPosts()
    {
        if(this.state.posts !== null)
        {
            return this.state.posts.map((post)=> {
                return (
                    <div className="mb-3">
                        <CardFrontPost imageUrl={ post.main_image.url}
                                       title={ post.title }
                                       onClickAction={ ()=> this.handleClickAction(post) } />
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
                    <TitleMain>Category Page</TitleMain>
                    { this.createPosts() }
                </div>
            </div>
        )
    }
}

export default CategoryPage
