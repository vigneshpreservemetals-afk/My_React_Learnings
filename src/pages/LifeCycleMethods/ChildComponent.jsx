

import React from "react";

export default class ChildComponent extends React.Component {

    constructor(props){
        super(props)

        this.state = {


        }

    }

        componentDidMount() {


            this.timeInterval = setInterval(()=> console.log("Hello React JS"),1000);
        }

        componentWillUnmount() {

            clearInterval(this.timeInterval);

            console.log("component is unmounted");

        }

        render() {
            
            return <div>
                <p> Child component </p>
            </div>
        }

        
    }
