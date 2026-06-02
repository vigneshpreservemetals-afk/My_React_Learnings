
import { useState } from "react";

import B_child from "./B_child";

export default function A_parent() {

    const[childshow,setChildShow] = useState(true) 

    return <div>

        <p> Iam  a Parent Page </p>

        <div>
            {childshow && <B_child/> }

            <button onClick={()=>setChildShow(false)}> Hide the component </button>
        </div>
    </div>
}