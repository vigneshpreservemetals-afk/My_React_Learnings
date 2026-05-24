

import { useState } from "react";
import StudentsList from '../../core/json/StudentsList.json'

export default function DemoPage6() {

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