import React, { Component } from 'react'
//there are four approaches to bind the event handler
//1) Binding in render
//2)arrow function in render
//3)binding in a constructor
//4)class property as arrow function
//Note->Binding in a constructor is the best option 
 class Eventbind extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              message:'Hello'
         }
        // this.clickhandler=this.clickhandler.bind(this)
     }
    //  clickhandler(){
    //      this.setState({
    //          message:'bye'
    //      })
    //  }
    clickhandler=()=>{
        this.setState({
                  message:'bye'
             })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
               {/* <button onClick={this.clickhandler.bind(this)}>click</button>  */}
            {/* <button onClick={()=>this.clickhandler()}>click</button> */}
            <button onClick={this.clickhandler}>click</button>
            </div>
        )
    }
}

export default Eventbind
