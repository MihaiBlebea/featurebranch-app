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

    handleSelectImage(image)
    {
        this.setState({
            selected: image
        })
        this.props.select(image)
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

    handleImageDelete(image)
    {
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
                    <div className="w-1/3 mb-4 px-2" key={ 'card_image_' + index }>
                        <CardImage isSelected={ this.isSelected(image) }
                                   imageUrl={ image.url }
                                   select={ ()=> this.handleSelectImage(image) }
                                   delete={ ()=> this.handleImageDelete(image) } />
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
                <div className="mb-8">
                    <FormUpload onInputChange={ (event)=> this.handleImageUpload(event) } />
                </div>
                <div className="flex flex-wrap -mx-2">
                    { this.createImageGallery() }
                </div>
            </div>
        )
    }
}

ImageGallery.propTypes = {
    select:  PropTypes.func.isRequired
}

export default ImageGallery
