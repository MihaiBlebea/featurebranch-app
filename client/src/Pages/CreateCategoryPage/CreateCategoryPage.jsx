import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { TitleMain, TitleChapter, CategoryCard } from './../../Components'
import { CategoryForm } from './../../Forms'

class CreateCategoryPage extends React.Component
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
            console.log(result.data)
            this.setState({
                categories: result.data
            })
        }).catch((error)=> {
            console.log(error)
        })
    }

    handleNewCategory()
    {
        this.fetchCategories()
    }

    createCategoryCards()
    {
        if(this.state.categories !== null)
        {
            return this.state.categories.map((category)=> {
                return (
                    <div className="mb-2">
                        <CategoryCard image={ category.main_image }
                                      title={ category.title } />
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
                <TitleMain>Categories Page</TitleMain>
                <div className="row">
                    <div className="col-md-4">
                        <TitleChapter>Categories</TitleChapter>
                        { this.createCategoryCards() }
                    </div>
                    <div className="col">
                        <TitleChapter>New category</TitleChapter>
                        <CategoryForm token={ this.props.token }
                                      onNewCategory={ ()=> this.handleNewCategory() } />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=> {
    return {
        token: state.auth.token
    }
}

export default connect(mapStateToProps)(CreateCategoryPage)
