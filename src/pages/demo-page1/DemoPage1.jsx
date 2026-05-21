

import React, { useState } from "react";

export default function DemoPage1() {

    const [candidateName,setcandidateName] = useState("Vignesh")
    const [CandidateAge, setCandidateAge] = useState(28)
    const [candidateSkillset,setcandidateSkillset] = useState(["React","Javascript","Bootstrap","Css","HTML"])
    const [candidateExperience,setcandidateExperience] = useState(
        [
            "Wipro",
            "Bank of America",
            "TCS"
    ]
    )


    return <div>

        <h2> Home Page </h2>
        <p> candidate Name: {candidateName} </p>
        <p> candidate Age : {CandidateAge } </p>
        <h3> candidate Skillset :</h3>
        {candidateSkillset.map((value,index) => <p> {value} </p>)}
        <h3> candidateExperience:</h3>
        {candidateExperience.map((value,index)=> <p key={index}> {value} </p> )} 
       
    </div>
}