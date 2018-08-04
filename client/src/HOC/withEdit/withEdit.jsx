import React from 'react'


const withEdit = (Component)=> (props)=> {
    const parseQueryParams = ()=> {
        if(props.location.search !== '')
        {
            const params = new URLSearchParams(props.location.search)
            return params.get('edit')
        }
    }

    return <Component { ...props } getEditId={ parseQueryParams() } />
}

export default withEdit
