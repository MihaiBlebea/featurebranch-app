import React from 'react'

import { CardPost, CardCategory } from './../../../Components'
import { MainHero, Banner } from './../../../Layouts'
import { withDataPosts, withDataCategories } from './../../../HOC'


const HomePage = (props)=> {

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
                                  content={ post.content }
                                  author={ post.author.first_name + ' ' + post.author.last_name }
                                  publishDate={ '20.08.2018' }
                                  commentsCount={ post.comments.length }
                                  onClickAction={ ()=> handlePostClick(post) }/>
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
        <div>
            <MainHero bgColor="blue">
                Homepage
            </MainHero>
            <Banner>
                { createCategories() }
            </Banner>
            <div className="py-10">
                <div class="flex flex-wrap justify-center">
                    <div class="w-1/2">
                        { createPosts() }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withDataCategories(withDataPosts(HomePage))
