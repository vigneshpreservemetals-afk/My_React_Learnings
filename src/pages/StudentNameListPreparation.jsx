import { useState } from "react";

export default function StudentNameListPreparation() {

    const[Student, setStudent] = useState()

    const[StudentList,setStudentList] = useState([])

    const AddNewStudent = () =>  {
        setStudentList([...StudentList,Student])
    }


    return <div>

        <div> Student List </div>
        
        <div> {StudentList.length !== 0 ?
        StudentList.map((value,index) => <p key={index}> {value} </p>)
        : <p> No Results Found </p> }
        </div>

        <div>
        <input type="text" onChange={(event) => setStudent(event?.target?.value)} />
        <button onClick={AddNewStudent}> Add New Student </button>    
        </div>
        
    </div>
}
