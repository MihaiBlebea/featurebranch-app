import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

import { CardImage, FormUpload } from './../index'


class ImageGallery extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            images: null,
            selected: null
        }
    }
    componentDidMount()
    {
        this.fetchImages()
    }

    fetchImages()
    {
        axios.get('image/all').then((result)=> {
            this.setState({
                images: result.data
            })
        }).catch((error)=> {
            console.log(error)
        })
    }

    handleSelectImage(index)
    {
        let selected = this.state.images[index]
        this.setState({
            selected: selected
        })
        this.props.onSelectImage(selected._id)
    }

    handleImageUpload(event)
    {
        const formData = new FormData()
        formData.append('image', event.target.files[0])
        axios.post('image/save', formData).then((result)=> {
            this.fetchImages()
        }).catch((error)=> {
            console.log(error)
        })
    }

    handleImageDelete(index)
    {
        let image = this.state.images[index]
        axios.delete('image/delete/' + image._id).then((result)=> {
            if(result.status === 200)
            {
                this.fetchImages()
            }
        }).catch((error)=> {
            console.log(error)
        })
    }

    isSelected(image)
    {
        return (this.state.selected !== null && this.state.selected._id === image._id) ? true : false
    }

    createImageGallery()
    {
        if(this.state.images !== null)
        {
            return this.state.images.map((image, index)=> {
                return (
                    <div className="col-md-4 mb-2" key={ `image_gallery_${index}` }>
                        <CardImage isSelected={ this.isSelected(image) }
                                   url={ image.url }
                                   handleSelected={ ()=> this.handleSelectImage(index) }
                                   handleDelete={ ()=> this.handleImageDelete(index) } />
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
                <div className="mb-2">
                    <FormUpload onInputChange={ (event)=> this.handleImageUpload(event) } />
                </div>
                <div className="row">
                    { this.createImageGallery() }
                </div>
            </div>
        )
    }
}

ImageGallery.propTypes = {
    onSelectImage: PropTypes.func.isRequired
}

export default ImageGallery
