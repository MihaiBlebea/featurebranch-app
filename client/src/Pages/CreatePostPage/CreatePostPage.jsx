import React from 'react'
import { TitleMain, EditorDraft } from './../../Components'
import { PostForm } from './../../Forms'

class CreatePostPage extends React.Component
{
    render()
    {
        return (
            <div>
                <TitleMain>Post Page</TitleMain>
                <div className="row">
                    <div className="col-md-8">
                        <EditorDraft />
                        
                    </div>
                    <div className="col-md-4">
                        <PostForm />
                    </div>
                </div>
            </div>
        )
    }
}

export default CreatePostPage
