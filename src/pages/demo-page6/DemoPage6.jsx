

import { useState } from "react";
import StudentsList from '../'

export default function DemoPage6() {

    const StudentsList = [
        {
            Name: "Vignesh",
            Age: 21,
            School: "DAV School"
        },
        {
            Name: "Kiruba",
            Age: 22,
            School: "Kendriya Vidyalaya"
        },
        {
            Name: "Abinaya",
            Age: 28,
            School: "Bethel Avenue"
        }
    ]

    const [Students, setStudents] = useState(StudentsList)

    return <div>
        {Students.map((value, index) => {
            return <div key={index}>
                <p> Student Name   : {value.Name} </p>
                <p> Student Age    : {value.Age} </p>
                <p> Student School : {value.School} </p>
                <hr />
            </div>
        })}

        <button onClick={() => setStudents([...Students,
        {
            Name: "Vino Sri",
            Age: 28,
            School: "Sunshine School"
        }
        ])
        }>
            Add Student
        </button>

    </div>
}