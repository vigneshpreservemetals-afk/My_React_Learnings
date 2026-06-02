
import React from "react";

export default class LifeCycleMethod extends React.Component {

    constructor(props) {

        super(props)

        console.log("1:Constructor is Called!!!")

        this.state = {
            count: 0
        }


    }

        

        componentDidMount() {
            console.log("3.Mounting Phase!!!")
        }

        componentDidUpdate() {
            console.log("4.Updating Phase!!!")
        }
        

    render() {

        console.log("2.Rendering has Initiated!!!")
        return (
        <div> 
            <h3> Welcome to React JS World</h3>

            <p> count : {this.state?.count} </p>

            <button onClick={()=> this.setState({count:this.state.count+1})}> Add Count </button>
        </div>
        )
    }
}


// import React from "react";

// export default class LifeCycleMethod extends React.Component {

// constructor(props){
//     super(props)

//     console.log("1.Constructor is Called")

//     this.state = {
//         count: 0
//     }
// }

// componentDidMount(){
// console.log("3.Component Mounting Stage")
// }

// componentDidUpdate(){
// console.log("4.Component Updating Stage")
// }


// render() {

//     console.log("2.Code is Rendering")

//     return (
//         <div> 
            
//         <h3> Welcome to React JS World </h3> 
        
//         <p> count: {this.state?.count} </p>

//         <button onClick={()=> this.setState({count:this.state?.count+1})}> Add Count </button>



//         </div>

        
//     )


// }

// }
