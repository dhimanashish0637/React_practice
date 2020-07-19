import React, { Component } from 'react'
//Whose value is controlled by react is called controlled component
 class Myform extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              username:'',
              comment:'',
              topic:'react'
         }
     }
     //handle username change and the property is going to be equal to an arrow function
     //It just so happens that when you assign a handler to the unchanged event the event itself is
     //passed as a parameter to the handler so we have one parameter called event from this event we 
     //can extract the value of the input element using event.target.value 
     //event recieve the element as an arguments
     handleusername=(event)=>{
         this.setState({
             username:event.target.value
             
         })
     }
     handlecomment=event=>
     {
         this.setState({
             comment:event.target.value
         })
     }
     handletopic=event=>{
         this.setState({
             topic:event.target.value
         })
     }
     handlesubmit=event=>{
         alert(`${this.state.username}`)
         //prevent default is used when you click ok on the alert the data as you entered is not removed 
         event.preventDefault()
     }
     //onchange is used to update the state if you are not used this function 
     //you are not able to write anything in the input text area
    render() {
        return (
           <form onSubmit={this.handlesubmit}>
               <div>
                   <label>Username</label>
                   <input type='text' value={this.state.username} onChange={this.handleusername}/>
               </div>
               <div>
                   <label>Comments</label>
                   <textarea value={this.state.comment} onChange={this.handlecomment}></textarea>
               </div>
               <div>
                   <label>Topic</label>
                   <select value={this.state.topic} onChange={this.handletopic}>
                       <option value="react">React</option>
                       <option value="angular">Angular</option>
                       <option value="vue">Vue</option>
                   </select>
               </div>
               <button type="submit">submit</button>
           </form>
        )
    }
}

export default Myform
