import React from 'react'
import Modal from 'react-bootstrap4-modal';
import PropTypes from 'prop-types';

import axios from 'axios'
import { FormUpload, CardImage } from './../index'


class ModalGallery extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            images: null,
            selected: null,
            isOpen: false
        }
    }
    componentDidMount()
    {
        this.fetchImages()
        this.setState({
            isOpen: this.props.isOpen
        })
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
            <Modal visible={ this.state.isOpen } onClickBackdrop={ '' }>
                <div className="modal-header">
                    <h5 className="modal-title">Red Alert!</h5>
                </div>
                <div className="modal-body">
                    <p>Enemy vessel approaching!</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={this.onPanic}>
                        Panic
                    </button>
                    <button type="button" className="btn btn-primary" onClick={this.onFirePhasers}>
                        Fire phasers
                    </button>
                </div>
            </Modal>
        )
    }
}

// <div className="modal fade"
//      id="exampleModal"
//      tabIndex="-1"
//      role="dialog"
//      aria-labelledby="exampleModalLabel"
//      aria-hidden="true">
//     <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
//         <div className="modal-content">
//             <div className="modal-header">
//                 <FormUpload onInputChange={ (event)=> this.handleImageUpload(event) } />
//                 <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                     <span aria-hidden="true">&times;</span>
//                 </button>
//             </div>
//             <div className="modal-body pl-2 pr-2">
//                 <div className="row">
//                     { this.createImageGallery() }
//                 </div>
//             </div>
//             <div className="modal-footer">
//                 <button className="btn btn-secondary"
//                         data-dismiss="modal">Close</button>
//                 <button className="btn btn-primary"
//                         data-dismiss="modal"
//                         onClick={ ()=> this.handleSaveImage() }>Select image</button>
//             </div>
//         </div>
//     </div>
// </div>

ModalGallery.propTypes = {
  isOpen: PropTypes.bool.isRequired,
}

export default ModalGallery
