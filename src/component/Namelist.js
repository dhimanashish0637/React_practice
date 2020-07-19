import React from 'react'
//Note:If your program has no uniqueid(key) then you need index as below
 function Namelist() {
     const names=['Ashish','Aryan','Arun']
     const namelist=names.map((x,id)=><h2 key={id}>{id} {x}</h2>)
    return (
        <div>
            { /* <h2>{name[0]}</h2>
            <h2>{name[1]}</h2>
            <h2>{name[2]}</h2> */ }
            {/* {
                
            names.map(x=><h2>{x}</h2>)
 } */}
 {
     namelist
 }
        </div>
    )
}
export default Namelist;