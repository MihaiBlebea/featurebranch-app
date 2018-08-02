import React from 'react'

const TitleChapter = (props)=> {
    return (
        <div className="mb-3">
            <h3 className="border-grey border-solid border-b">
                <strong>{ props.children }</strong>
            </h3>
        </div>
    )
}

export default TitleChapter
