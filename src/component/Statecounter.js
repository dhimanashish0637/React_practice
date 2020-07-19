//we never modify the state directly instead make use of set state
import React, { Component } from 'react'

 class Statecounter extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              count:0
         }
     }
     increment()
     {
         this.setState({
             count:this.state.count+1
         },()=>console.log("callback", this.state.count))
         //when we click on increment the value is 1 but in console the value is 0
         //this is because call to set state are asynchronus so what is happening in console
         //is being called before the state is actually set
         //TO handle suct a situation call back function is there so in which there are two parameteres
         //state object and callback function
         //callback function is arrow function  
         console.log(this.state.count)
     }
    render() {
        return (
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick={()=>this.increment()}>Increment</button>
            </div>
        )
    }
}

export default Statecounter
