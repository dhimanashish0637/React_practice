import React,{Component} from 'react';
//state  is nothing but object you can change anywhere in component
class Dhiman extends Component
{
    constructor()
    {
        //super is used because we extend react component class and call has to be
        //made by base class constructor
        super()
        //we create state object
        this.state={
        message:'Welcome'
        }
    }
    changemessage()
    {
        this.setState({
            message:'ThankYou'
        })
    }
    render(){
        return(
            <div>
        <h1>{this.state.message}</h1>
        <button onClick={()=>this.changemessage()}>change</button>
        </div>
        )}
        //onClick attribute is camelcase, camelcase means C is capital
        //this.changemessage is the handler 
}
export default Dhiman