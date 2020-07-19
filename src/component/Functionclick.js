import React from 'react'

function Functionclick() {
     function clickHandler(){
        console.log('clicked');
    }
    return (
        <div>
            <button onClick={clickHandler}>click</button>
        </div>
    )
}

export default Functionclick
