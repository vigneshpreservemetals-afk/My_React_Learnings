
import { useState } from "react";

export default function DemoPage2() {

    const [candidateName,setcandidateName]     = useState("Vignesh")
    const [candidateAge,setCandidateAge]       = useState(30)
    const [candidateScore,setCandidateScore]   = useState(0)

return <div>

<div>
    <span> candidateName: {candidateName} </span>
    <span> <button onClick={()=> setcandidateName("Kirubakaran")}> Change Name </button></span>
</div>

<div>
    <span> candidateAge: {candidateAge} </span>
    <span> <button onClick={()=> setCandidateAge(25)}> Change Age </button></span>
</div>

<div>
    <span> candidateScore: {candidateScore} </span>
    <span> <button onClick={() => setCandidateScore((score)=> score+1)}> Change Score </button> </span>
</div>

</div>

}