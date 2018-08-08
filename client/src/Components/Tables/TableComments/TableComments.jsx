import React from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import PropTypes from 'prop-types'
import axios from 'axios'

import { ModalConfirmation } from './../../../Components'


class TableComments extends React.Component
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
                Header: 'Info',
                columns: [
                    {
                        Header: 'Title',
                        accessor: 'title'
                    },
                    {
                        Header: 'Content',
                        accessor: 'content'
                    },
                    {
                        Header: 'Status',
                        id: 'status',
                        accessor: (row)=> {
                            return (row.status) ? 'approved' : 'not approved'
                        }
                    },
                    {
                        Header: 'Author',
                        accessor: 'author'
                    },
                ]
            },
            {
                Header: 'Actions',
                columns: [
                    {
                        Header: "Change status",
                        accessor: "change",
                        Cell: (row)=> {
                            return <div className="cursor-pointer"
                                        onClick={ ()=> this.handleApproveStatus(row.original._id, row.original.status) }>
                                        { (row.original.status) ? 'Disapprove' : 'Approve' }
                                    </div>
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

    handleDelete(id)
    {
        this.toggleModal()
        axios.delete('comment/delete/' + id).then((result)=> {
            if(result.status === 200)
            {
                this.props.refreshComments()
            }
        }).catch((error)=> {
            console.log(error)
        })
    }

    handleApproveStatus(id, status)
    {
        let updatedStatus = !status
        let url = 'comment/approve/' + id + '?status=' + updatedStatus
        axios.get(url).then((result)=> {
            if(result.status === 200)
            {
                this.props.refreshComments()
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

TableComments.propTypes = {
    refreshComments: PropTypes.func.isRequired,
    data:            PropTypes.array,
}

export default TableComments
