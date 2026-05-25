

import { useState } from "react";

export default function ChangeEvent() {

const[SearchText,SetSearchText] = useState()

return <div>
<input type="text" onChange={(value) => SetSearchText(event?.target?.value)} />
<p> your typed text is : {SearchText} </p>
</div>
}