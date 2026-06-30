
import { useState } from "react";

export default function BasicForm1() {

    const[loginData,setloginData] = useState({})

const star = {

    color: "red"

}



const handleChange = (event) => {

    const fieldName = event?.target?.name;
    const fieldValue = event?.target?.value;

    setloginData({...loginData,[fieldName]:fieldValue})
   
}

const stopReload = (event) =>{
    event.preventDefault()
    console.log(loginData)
}




return <div>
    

<h1> React Form </h1>

<form onSubmit={stopReload}>

<div> 
    <label htmlFor="username"> User Name <span style={star}> * </span> </label>
    <input type="text" id="username" name="username" onChange={handleChange}/>
</div>

<div>
    <label htmlFor="password"> Password <span style={star}> * </span> </label>
    <input type="password" name="password" id="password" onChange={handleChange} />
</div>

<div> 
    <button type="submit"> Register </button>
</div>

</form>

</div>
}