import React from 'react'
import axios from 'axios'
import { FormUpload } from './../index'

class ModalGallery extends React.Component
{
    constructor()
    {
        super()
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
        axios.get(process.env.REACT_APP_API_ROOT + 'image/all').then((result)=> {
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
    }

    handleSaveImage()
    {
        if(this.state.selected !== null)
        {
            this.props.onSelectImage(this.state.selected)
        }
    }

    handleImageUpload(event)
    {
        const formData = new FormData()
        formData.append('image', event.target.files[0])
        axios.post(process.env.REACT_APP_API_ROOT + 'image/save', formData).then((result)=> {
            this.fetchImages()
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
                        <img className={'w-100 ' + (this.isSelected(image) ? 'shadow-lg' : '') }
                             style={{ cursor: 'pointer' }}
                             src={ image.url }
                             onClick={ ()=> this.handleSelectImage(index) } />
                    </div>
                )
            })
        }
        return null
    }

    render()
    {
        return (
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <FormUpload onInputChange={ (event)=> this.handleImageUpload(event) } />
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body pl-2 pr-2">
                            <div className="row">
                                { this.createImageGallery() }
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary"
                                    data-dismiss="modal">Close</button>
                            <button className="btn btn-primary"
                                    data-dismiss="modal"
                                    onClick={ ()=> this.handleSaveImage() }>Select image</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalGallery
