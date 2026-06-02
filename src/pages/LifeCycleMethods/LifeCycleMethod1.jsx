

import React from "react";
import ChildComponent from "./ChildComponent";

export default class LifeCycleMethod1 extends React.Component{

    constructor(props){
        super(props)

        console.log("1.Constructor is Called!!!")

        this.state = {
            price: 0,
            ChildComponentEnable: false
        }
    }

    componentDidMount(){
        console.log("1.Mounting Phase!!!!")
    }

    componentDidUpdate(){
        console.log("4.Updating Phase")
    }


    render(){

        console.log("2.Rendering Phase")

        return <div>

            <h3> Welcome to React JS World </h3>

            <p> price: {this.state?.price} </p>

            <button onClick={()=>this.setState({price:this.state?.price+1})}> Add Count </button>
            
            <div>
            {this.state.ChildComponentEnable && (<ChildComponent/>)}
            </div>
        
        </div>


    }
}