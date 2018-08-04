import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

const withDataPosts = (Component)=> {
    return class WithDataPosts extends React.Component
    {
        constructor(props)
        {
            super(props)
            this.state = {
                posts: null,
            }
        }

        componentDidMount()
        {
            this.fetchPosts()
        }

        fetchPosts()
        {
            axios.get('post/all').then((result)=> {
                this.setState({
                    posts: result.data
                })
            }).catch((error=> {
                console.log(error)
            }))
        }

        render()
        {
            return <Component { ...this.props } posts={ this.state.posts } />
        }
    }
}

withDataPosts.propTypes = {
    categoryId: PropTypes.string
}

export default withDataPosts
