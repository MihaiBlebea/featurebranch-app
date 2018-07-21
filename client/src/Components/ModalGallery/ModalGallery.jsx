import React from 'react'
import axios from 'axios'

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
                images: result.data,
                selected: result.data[0].src
            })
        }).catch((error)=> {
            console.log(error)
        })
    }

    handleSelectImage(event)
    {
        this.setState({
            selected: event.target.src
        })
    }

    createImageGallery()
    {
        if(this.state.images !== null)
        {
            return this.state.images.map((image, index)=> {
                return (
                    <div className="col-md-4" key={ `image_gallery_${index}` }>
                        <img className="w-100" src={ image.url } onClick={ (event)=> this.handleSelectImage(event) } />
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
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
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
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalGallery
