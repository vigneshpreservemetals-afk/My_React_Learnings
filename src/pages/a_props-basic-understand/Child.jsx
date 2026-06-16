 
 
 export default function Child( {
    
    studentName,
    studentAge,
    BoardOfMedium,
    studentLocation,
    studentSkillset,
    AcademicResult
    
 } 

){
 
    
const {Quaterly,HalfYearly,Annual} = AcademicResult

 return <div>
    <h3> Am a Child Component </h3>
    <p> Student Name: {studentName} </p>
    <p> Student Age: {studentAge} </p>
    <p> Student Board of Medium: {BoardOfMedium} </p>
    <p> Student Location: {studentLocation} </p>

    <h3> Primary Skill Set </h3>
    {studentSkillset.map((value,index) => <p key={index}> {value} </p> )}

    <h3> AcademicResult: </h3>
    <p> {Quaterly} </p>
    <p> {HalfYearly} </p>
    <p> {Annual} </p>

 </div>
 }

 