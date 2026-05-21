import React, { useState } from "react";

export default function DemoPage5() {

    const[student,setstudent] = useState(
        {
            Name: "Vignesh",
            Age : 14,
            BoardofMedium: "CBSE",
            School: "DAV School"
        }
    )

    return <div>

        <p> Student Name = {student.Name} </p>
        <p> Student Age  = {student.Age} </p>
        <p> student Board of Medium = {student.BoardofMedium} </p>
        <p> student School = {student.School} </p>

        <button onClick={() => setstudent({...student,School:"kendriya Vidyalaya"}) }> Change School </button>
    </div>

}