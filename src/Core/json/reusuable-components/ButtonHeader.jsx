
import { useNavigate } from "react-router"

export default function ButtonHeader() {

    const navigate = useNavigate()

return <div className="bg-primary">

    <button onClick={()=>navigate("/home")}> Home Page </button>
    <button onClick={()=>navigate("/contact")}> Contact Page </button>
    <button onClick={()=>navigate("/about")}> About Page </button>

   
</div>
}