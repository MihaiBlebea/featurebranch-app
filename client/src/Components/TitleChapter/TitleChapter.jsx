import React from 'react'

const TitleChapter = (props)=> {
    return (
        <div className="mb-3">
            <h5><strong>{ props.children }</strong></h5>
            <hr />
        </div>
    )
}

export default TitleChapter
