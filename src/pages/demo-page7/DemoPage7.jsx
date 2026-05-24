

import { useState } from "react";
import EmployeeData from '../../core/json/Employee.json'

export default function DemoPage7() {

    const [EmployeeInfo,SetEmployeeInfo] = useState(EmployeeData)

    return <div>
        
        <div> <h4> Employee Information </h4>

            <div> <span> <strong> Employee Name: </strong> </span>
                <span> {EmployeeInfo.Name}  </span> </div>

            <div> <span> <strong> Employee Address: </strong> </span>
                <span> {EmployeeInfo.Address.StreetName}  </span> 

            <button onClick={() => SetEmployeeInfo({...EmployeeInfo, 
                Address:{...EmployeeInfo.Address, StreetName:"1st Street"} })}> Change Street Name </button>
            </div>

            <div> <span> <strong> Employee Address: </strong> </span>
                <span> {EmployeeInfo.Address.Area}  </span> 

            <button onClick={() => SetEmployeeInfo({...EmployeeInfo, 
                Address:{...EmployeeInfo.Address, Area:"Pallikaranai"} })}> Change Area </button>
            </div>
    </div>
    </div>
}