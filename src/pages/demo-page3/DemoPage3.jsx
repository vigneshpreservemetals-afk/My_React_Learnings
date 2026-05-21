import { useState } from "react";

export default function DemoPage3() {

    const[candidateName,setcandidateName] = useState("MK Stalin")
    const[candidateAge,setcandidateAge]   = useState(70)
    const[depositAmount,setdepositAmount] = useState(500000.454545454)
    const[returnAmount, setreturnAmount]  = useState(depositAmount-7000)
    const[totalPopulation,settotalPopulation] = useState(500000)
    const[malePopulation,setmalePopulation]   = useState(totalPopulation/2)
    const[bulkbtndisable,setbulkbtndisable]   = useState(false)


    const handleUpdate =() => {
        setcandidateName("Jospeh Vijay")
        setcandidateAge(50)
        setdepositAmount(450000)
        setreturnAmount(depositAmount-5000)
        settotalPopulation(600000) 
        setmalePopulation(300000)
        setbulkbtndisable(true)
    }

    return <div>

        <div>
            <p> Election consitituency : <strong> {"Tamil Nadu"} </strong> </p>
            <p> Elected Candidate Name : <strong> {candidateName.toUpperCase()} </strong> </p>
            <p> Elected Candidate Age  : {candidateAge}</p> 
            <p> Election Deposit Amount: {depositAmount.toFixed(3)} </p>
            <p> After Election Return Amount: {returnAmount.toFixed(2)} </p>
            <p> Total Population : {totalPopulation} </p> 
            <p> Female Population :{malePopulation} </p>
        </div>

        <div> 
            <button onClick={handleUpdate}
            disabled ={bulkbtndisable}
            > Update </button>
        </div>
    </div>
}
