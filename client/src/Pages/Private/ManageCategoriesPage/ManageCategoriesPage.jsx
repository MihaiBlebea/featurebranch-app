import React from 'react'
import axios from 'axios'

import { DefaultLayout } from './../../../Layouts'
import { CardCategory, TitleMain } from './../../../Components'

class ManageCategoriesPage extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            categories: null
        }
    }

    componentDidMount()
    {
        this.fetchCategories()
    }

    handleDeleteCard(index)
    {
        let category = this.state.categories[index]
        axios.delete('category/delete/' + category._id).then((result)=> {
            if(result.status === 200)
            {
                this.fetchCategories()
            }
        }).catch((error)=> {
            console.log(error)
        })
    }

    fetchCategories()
    {
        axios.get('category/all').then((result)=> {
            this.setState({
                categories: result.data
            })
        }).catch((error)=> {
            console.log(error)
        })
    }

    createCategoryCards()
    {
        if(this.state.categories !== null)
        {
            return this.state.categories.map((category, index)=> {
                return (
                    <div className="w-1/2 mb-4 h-12 px-2" key={ 'card_category_' + index }>
                        <CardCategory id={ index }
                                      imageUrl={ category.main_image.url }
                                      title={ category.title }
                                      postsCount={ category.posts.length }
                                      delete={ ()=> this.handleDeleteCard(index) } />
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
                    { this.createCategoryCards() }
                </div>
            </DefaultLayout>
        )
    }
}

export default ManageCategoriesPage
