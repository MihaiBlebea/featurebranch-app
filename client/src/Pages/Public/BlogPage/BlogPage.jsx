import React from 'react'

import axios from 'axios'
import { TitleMain, CardFrontCategory } from './../../../Components'
import { DefaultLayout } from './../../../Layouts'


class BlogPage extends React.Component
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

    handleClickAction(category)
    {
        this.props.history.push('/blog/' + category.slug)
    }

    createCategories()
    {
        if(this.state.categories)
        {
            return this.state.categories.map((category, index)=> {
                return (
                    <div className="col-md-4" key={ 'category-card-' + index }>
                        <CardFrontCategory imageUrl={ category.main_image.url }
                                           title={ category.title }
                                           onClickAction={ ()=> this.handleClickAction(category) } />
                    </div>
                )
            })
        }
        return null
    }

    render()
    {
        return (
            <div>
                <DefaultLayout>
                    <TitleMain>Blog Page</TitleMain>
                    <div className="row">
                        { this.createCategories() }
                    </div>
                </DefaultLayout>
            </div>
        )
    }
}

export default BlogPage
