import React from 'react'

import { TitleMain } from './../../../Components'
import { CategoryForm } from './../../../Forms'
import { DefaultLayout } from './../../../Layouts'


class NewCategoryPage extends React.Component
{
    render()
    {
        return (
            <DefaultLayout>
                <TitleMain>Categories Page</TitleMain>
                <div className="flex flex-wrap">
                    <div className="w-2/3 ml-auto mx-auto">
                        <CategoryForm />
                    </div>
                </div>
            </DefaultLayout>
        )
    }
}


export default NewCategoryPage
