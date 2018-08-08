import React from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import PropTypes from 'prop-types'
import axios from 'axios'
import { withRouter } from 'react-router'

import { ModalConfirmation } from './../../../Components'


class TablePosts extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            isOpen: false,
            toDelete: null
        }

        this.columns = [
            {
                Header: "Info",
                columns: [
                    {
                        Header: "Title",
                        accessor: "title"
                    },
                    {
                        Header: "Slug",
                        accessor: "slug"
                    },
                    {
                        Header: "Comments",
                        id: 'comments',
                        accessor: (row)=> row.comments + ' comments'
                    },
                    {
                        Header: "Author",
                        accessor: 'author'
                    },
                ]
            },
            {
                Header: 'Actions',
                columns: [
                    {
                        Header: "Preview",
                        accessor: "preview",
                        Cell: (row)=> {
                            return <div className="cursor-pointer"
                                        onClick={ ()=> this.handlePreview(row.original.slug) }>Preview</div>
                        }
                    },
                    {
                        Header: "Edit",
                        accessor: "edit",
                        Cell: (row)=> {
                            return <div className="cursor-pointer"
                                        onClick={ ()=> this.handleEdit(row.original._id) }>Edit</div>
                        }
                    },
                    {
                        Header: "Delete",
                        accessor: "delete",
                        Cell: (row)=> {
                            return <div className="cursor-pointer"
                                        onClick={ ()=> {
                                            this.setState({ toDelete: row.original._id })
                                            this.toggleModal()
                                        }}>Delete</div>
                        }
                    }
                ]
            }
        ]
    }

    handleEdit(id)
    {
        this.props.history.push('/admin/post?edit=' + id)
    }

    handlePreview(slug)
    {
        this.props.history.push('/admin/preview/' + slug)
    }

    handleDelete(id)
    {
        this.toggleModal()
        axios.delete('post/delete/' + id).then((result)=> {
            if(result.status === 200)
            {
                this.props.refreshPosts()
            }
        }).catch((error)=> {
            console.log(error)
        })
    }

    toggleModal()
    {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    createConfirmationModal()
    {
        if(this.state.isOpen)
        {
            return (
                <ModalConfirmation close={ ()=> this.toggleModal() }
                                   cancel={ ()=> this.toggleModal() }
                                   confirm={ ()=> this.handleDelete(this.state.toDelete) }>
                    You are about to delete a model. Are you sure you want to continue?
                </ModalConfirmation>
            )
        }
        return null
    }

    render()
    {
        return (
            <div>
                <ReactTable data={ this.props.data || [] }
                            columns={ this.columns }
                            defaultPageSize={ 10 }
                            className="-striped -highlight" />
                { this.createConfirmationModal() }
            </div>
        )
    }
}

TablePosts.propTypes = {
    refreshPosts: PropTypes.func.isRequired,
    data: PropTypes.array,
}

export default withRouter(TablePosts)
