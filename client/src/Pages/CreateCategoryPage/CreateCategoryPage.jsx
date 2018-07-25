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

    handleDeleteCard(index)
    {
        let category = this.state.categories[index]
        axios.delete(process.env.REACT_APP_API_ROOT + `category/delete/${category.slug}`).then((result)=> {
            if(result.status === 200)
            {
                this.fetchCategories()
            }
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
                    <div className="mb-2" key={ 'category_card_' + index }>
                        <CategoryCard id={ index }
                                      image={ category.main_image }
                                      title={ category.title }
                                      onDelete={ ()=> this.handleDeleteCard(index) } />
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