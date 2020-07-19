import React from 'react'
//This is without JSX
//null is an object of  key value pair that will applied to the element lets say
//we need id attribute on this div tag
//replace null to {id:'hello' ,className:'dummyclass'}
const Hello1=()=>
{
    return React.createElement('div', null,React.createElement('h1',null,'hellobuddy'))
}
export default Hello1