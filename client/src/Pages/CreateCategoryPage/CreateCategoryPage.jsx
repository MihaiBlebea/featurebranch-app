import React from 'react'
import { connect } from 'react-redux'
import { TitleMain } from './../../Components'
import { CategoryForm } from './../../Forms'

class CreateCategoryPage extends React.Component
{
    render()
    {
        return (
            <div>
                <TitleMain>Categories Page</TitleMain>
                <div className="row">
                    <div className="col-md-4">
                        Categories
                    </div>
                    <div className="col">
                        New Category
                        <CategoryForm token={ this.props.token }/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=> {
    return {
        token: state.auth.token
    }
}

export default connect(mapStateToProps)(CreateCategoryPage)
