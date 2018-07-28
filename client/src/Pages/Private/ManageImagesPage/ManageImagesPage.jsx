import React from 'react'
import { TitleMain, ImageGallery } from './../../../Components'
import { DefaultLayout } from './../../../Layouts'


const ManageImagesPage = ()=> {
    return (
        <DefaultLayout>
            <TitleMain>Manage images</TitleMain>
            <ImageGallery />
        </DefaultLayout>
    )
}

export default ManageImagesPage
