import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

import { DefaultLayout } from './../../../Layouts'
import { TitleMain, TableCategory, CardDefault } from './../../../Components'
import { withDataCategories } from './../../../HOC'


const ManageCategoriesPage = (props)=> {
    const transformData = (data)=> {
        if(data)
        {
            return data.map((item)=> {
                return {
                    _id: item._id,
                    name: item.title,
                    slug: item.slug,
                    posts: item.posts.length,
                }
            })
        }
        return null
    }

    return (
        <DefaultLayout>
            <TitleMain>Manage categories</TitleMain>
            <CardDefault>
                <TableCategory data={ transformData(props.categories) }
                               refreshCategories={ props.refreshCategories }/>
            </CardDefault>
        </DefaultLayout>
    )
}



export default withDataCategories(ManageCategoriesPage)
