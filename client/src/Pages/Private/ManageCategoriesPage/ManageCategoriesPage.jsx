import React from 'react'
import axios from 'axios'

import { DefaultLayout } from './../../../Layouts'
import { TitleMain, CardManageContent } from './../../../Components'


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
                    <div className="w-1/2 mb-4 px-2 mb-5" key={ 'card_category_' + index }>
                        <CardManageContent edit={ ()=> this.handleDeleteCard(index) }
                                           delete={ ()=> this.handleDeleteCard(index) }>

                            <div className="inline-flex">
                                <div className="mr-3">{ category.title }</div>
                                <div className="mr-3">{ category.posts.length } posts</div>
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
                <TitleMain>Manage categories</TitleMain>
                <div className="flex flex-wrap -mx-2">
                    { this.createCategoryCards() }
                </div>
            </DefaultLayout>
        )
    }
}

export default ManageCategoriesPage
