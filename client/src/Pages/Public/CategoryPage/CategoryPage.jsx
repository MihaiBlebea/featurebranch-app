import React from 'react'
import random from 'randomstring'

import axios from 'axios'
import { TitleMain, CardFrontPost } from './../../../Components'
import { DefaultLayout } from './../../../Layouts'


class CategoryPage extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            title: null,
            description: null,
            image: null,
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
        axios.get('category/' + this.state.categorySlug).then((result)=> {
            this.setState({
                title: result.data.title,
                description: result.data.description,
                image: result.data.main_image.url,
                posts: result.data.posts
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
            return this.state.posts.map((post, index)=> {
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
        return null
    }

    render()
    {
        return (
            <DefaultLayout>
                <TitleMain>Category Page</TitleMain>
                { this.createPosts() }
            </DefaultLayout>
        )
    }
}

export default CategoryPage
