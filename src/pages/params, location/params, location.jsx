
import { useParams, useLocation, useNavigation } from "react-router";

export default function Homepage() {

    const params = useParams()
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search);

    const id = searchParams.get("id");
    const name = searchParams.get("name")


    console.log("params===>",params)
    console.log("id===>",id)
    console.log("name===>",name);

    return <div>

      <h2> View Home Page </h2>  
      <p> param id ={id} </p>
      <p> param name = {name} </p>

        
    </div>
}