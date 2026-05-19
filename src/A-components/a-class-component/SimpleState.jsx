
import React from "react";

export default class SimpleState extends React.component{

    constructor(props){
        super(props)

        this.state={
            instituteName:"CredoSystems",
            location:"Velachery",
        
            student:{
            name:"Vignesh Baskaran",
            batchNo:260274,
            qualification:"BE(Mechanical)",
            course:"React Full-Stack Developer"
        },

        mentor:{
            name:"Saravanan",
            role:"Full-Stack Trainer",
            experience: "5 years"

        }
    }

    }


    render(){
        return <div>
            <h3> {this.state.instituteName + ',' + this.state.location} </h3>

            <div className="StudentDetails">
                <p> {this.state.student.name + ',' + this.state.student.batchNo} </p>
                <p> {this.state.student.qualification} </p>
                <p> {this.state.student.course} </p>
            </div>

            <hr />

            <div className="MentorDetails">
                <p> {this.state.mentor.name + ',' +this.state.mentor.role + ',' + this.state.men.experience} </p>
            </div>
        </div>
    
}
}