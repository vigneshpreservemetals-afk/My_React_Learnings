

import Skillset from "./Skillset";

export default function AddionalInformation (
    {
    
    studentAge,
    studentLocation,
    studentSkillset

    }
){

    return <div>
    <p> student Age: {studentAge} </p>
    <p> student Location: {studentLocation} </p>
    <Skillset
    studentSkillSet={studentSkillset}
    />
    </div>
}