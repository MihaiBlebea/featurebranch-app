import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

const withDataComments = (Component)=> {
    return class WithDataComments extends React.Component
    {
        constructor(props)
        {
            super(props)
            this.state = {
                comments: null,
            }
        }

        componentDidMount()
        {
            this.fetchComments()
        }

        fetchComments()
        {
            axios.get('comment/all').then((result)=> {
                this.setState({
                    comments: result.data
                })
            }).catch((error=> {
                console.log(error)
            }))
        }

        render()
        {
            return <Component { ...this.props }
                              comments={ this.state.comments }
                              refreshComments={ ()=> this.fetchComments() }/>
        }
    }
}

export default withDataComments
