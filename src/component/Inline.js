import React from 'react'
//In react inline styles are not specified by string instead they are specified with an
//onject whose key camelcase version of the style name and a value usually a string
const heading={
    fontSize:'72px' ,
    color:'red'
}
function Inline() {
    return (
        <div>
            <h1 style={heading}>Inline</h1>
        </div>
    )
}

export default Inline
