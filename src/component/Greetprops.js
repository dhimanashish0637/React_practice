import React from 'react'
const Greetprops=(props)=>{
    return(
        <div>
         <h1>{props.name} {props.last}</h1>
         {props.children}
         </div>
        )
}
export default Greetprops