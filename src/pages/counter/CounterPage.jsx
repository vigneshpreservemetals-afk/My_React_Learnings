
import { useSelector,useDispatch } from "react-redux";
import { add,sub,mul,div } from "./counter.slice";


export default function CounterPage() {

    const count = useSelector((state)=> state?.counter?.count)
    const dispatch = useDispatch ()

    return <div>
    
    <h3> Counter Page </h3>

    <div>

    <h4> count = {count} </h4>

    <button onClick={()=> dispatch((add()))}> Add </button>

    <button onClick={()=> dispatch((sub()))}> Sub </button>

    <button onClick={()=> dispatch((mul()))}> Mul </button>
    
    <button onClick={()=> dispatch((div()))}> Div </button>
    
    </div>

    </div>
}