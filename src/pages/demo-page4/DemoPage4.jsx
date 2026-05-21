
import { useState } from "react";

export default function DemoPage4 () {
const [fruits, setfruits] = useState(["Apple","Orange","Mango","Banana"])



return <div>
{fruits.map((value,index) => <p key={index}> {value} </p>)}
<button onClick={()=> setfruits([...fruits,"Lichi"])}> Add Me </button>  
</div>
}