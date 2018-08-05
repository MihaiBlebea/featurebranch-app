import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

const withDataCategories = (Component)=> {
    return class WithDataCategories extends React.Component
    {
        constructor(props)
        {
            super(props)
            this.state = {
                categories: null,
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
            }).catch((error=> {
                console.log(error)
            }))
        }

        render()
        {
            return <Component { ...this.props }
                              categories={ this.state.categories }
                              refreshCategories={ ()=> this.fetchCategories() }/>
        }
    }
}

withDataCategories.propTypes = {
    categoryId: PropTypes.string
}

export default withDataCategories
