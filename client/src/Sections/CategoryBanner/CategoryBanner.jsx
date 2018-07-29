import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router'
import random from 'randomstring'

import { CardFrontCategory } from './../../Components'


class CategoryBanner extends React.Component
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
        axios.get(process.env.REACT_APP_API_ROOT + 'category/all').then((result)=> {
            if(result.status === 200)
            {
                this.setState({
                    categories: result.data
                })
            }
        }).catch((error)=> {
            console.log(error)
        })
    }

    handleClickAction(category)
    {
        this.props.history.push(`/blog/${category.slug}`)
    }

    createCategoryCards()
    {
        if(this.state.categories !== null)
        {
            return this.state.categories.map((category)=> {
                return (
                    <div className="col-md-3" key={ random.generate(6) }>
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
            <div className="bg-secondary">
                <div className="container">
                    <div className="row py-3">
                        { this.createCategoryCards() }
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(CategoryBanner)
