

import { useState } from "react";

export default function ChangeEvent() {

    const[SearchBox,SetSearchbox] = useState()

    return <div>
    <input type="text" onChange={(event) => SetSearchbox(event?.target?.name)} />
    <p> your typed text is : {SearchBox} </p>
    </div>
}