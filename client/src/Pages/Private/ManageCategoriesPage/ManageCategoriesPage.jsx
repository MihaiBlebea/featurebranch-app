import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

import { DefaultLayout } from './../../../Layouts'
import { TitleMain, CardManageContent } from './../../../Components'
import { withDataCategories } from './../../../HOC'


const ManageCategoriesPage = (props)=> {
    const handleDeleteCard = (category)=> {
        axios.delete('category/delete/' + category._id).then((result)=> {
            if(result.status === 200)
            {
                props.refreshCategories()
            }
        }).catch((error)=> {
            console.log(error)
        })
    }

    const handleEditCategory = (category)=> {
        props.history.push('/admin/category?edit=' + category._id)
    }

    const createCategoryCards = ()=>
    {
        if(props.categories !== null)
        {
            return props.categories.map((category, index)=> {
                return (
                    <div className="w-1/2 mb-4 px-2 mb-5" key={ 'card_category_' + index }>
                        <CardManageContent edit={ ()=> handleEditCategory(category) }
                                           delete={ ()=> handleDeleteCard(category) }>

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

    return (
        <DefaultLayout>
            <TitleMain>Manage categories</TitleMain>
            <div className="flex flex-wrap -mx-2">
                { createCategoryCards() }
            </div>
        </DefaultLayout>
    )
}



export default withDataCategories(ManageCategoriesPage)
