import React from 'react'

import { TitleMain } from './../../../Components'
import { CategoryForm } from './../../../Forms'
import { DefaultLayout } from './../../../Layouts'
import { withEdit } from './../../../HOC'

const NewCategoryPage = (props)=> {
    return (
        <DefaultLayout>
            <TitleMain>Categories Page</TitleMain>
            <div className="flex flex-wrap">
                <div className="w-2/3 ml-auto mx-auto">
                    <CategoryForm editId={ props.getEditId } />
                </div>
            </div>
        </DefaultLayout>
    )
}


export default withEdit(NewCategoryPage)
