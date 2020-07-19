//without any extra dom(<div>) we can return multiple elements
//In react.fragments we can use key also
//Note: another way to use is <> </> empty tag, Limitation is no need to use keys 
import React from 'react'

function Fragment() {
    return (
        <React.Fragment>            <h1>Fragment demo</h1>
            <p>Please described them</p>
            </React.Fragment>

    )
}

export default Fragment
