//In this program we pass a refernce of method as a props  to the child component
import React, { Component } from 'react'
import Childcomponent from './Childcomponent'

 class Parentcomponent extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
            parentName:'Parent'  
         }
         this.greetParent=this.greetParent.bind(this)
     }
     //backticks and dollar is the feature in es6 and is not a feature specific to react
    greetParent(childName)
    {
        alert(`Hello $(this.state.parentName) from ${childName}`)
    }
    //greetHandler is used as a props 
    render() {
        return (
            <div>
                
               <Childcomponent greetHandler={this.greetParent}></Childcomponent> 
            </div>
        )
    }
}

export default Parentcomponent
