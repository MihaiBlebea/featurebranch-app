import React from 'react'

import { withDataPosts, withDataCategories } from './../../HOC'
import { CardPost, CardCategory } from './../../Components'


const BlogContent = (props)=> {
    const handlePostClick = (post)=> {
        props.history.push('/post/' + post.slug)
    }

    const createPosts = ()=> {
        if(props.posts)
        {
            return props.posts.map((post, index)=> {
                return (
                    <div key={ 'post_' + index } className="mb-8">
                        <CardPost imageUrl={ post.main_image.url }
                                  title={ post.title }
                                  slug={ post.slug }
                                  content={ post.content }
                                  author={ post.author.first_name + ' ' + post.author.last_name }
                                  publishDate={ '20.08.2018' }
                                  commentsCount={ post.comments.length }
                                  click={ ()=> handlePostClick(post) }/>
                    </div>
                )
            })
        }
        return null
    }

    const handleCategoryClick = (category)=> {
        props.history.push('/blog/' + category.slug)
    }

    const createCategories = ()=> {
        if(props.categories)
        {
            return props.categories.map((category, index)=> {
                return (
                    <div key={ 'category_' + index }>
                        <CardCategory imageUrl={ category.main_image.url }
                                      title={ category.title }
                                      click={ ()=> handleCategoryClick(category) } />
                    </div>
                )
            })
        }
    }

    return (
        <div className="flex flex-wrap -mx-2">
            <div className="w-2/3 px-2">
                { createPosts() }
            </div>
            <div className="w-1/3 px-2">
                { createCategories() }
            </div>
        </div>
    )
}

export default withDataCategories(withDataPosts(BlogContent))
