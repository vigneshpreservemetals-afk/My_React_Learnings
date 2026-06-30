
import { useRef, useState } from "react";

export default function UncontrolledForm() {


const star = {

    color: "red"

}

// const emailField    = useRef()
// const passwordField = useRef()

const Universalref = useRef()

const stopReload = (event) =>{
    event.preventDefault()
    
    const formData = {

        email: Universalref.current[0].value,
        password: Universalref.current[1].value
    }
    console.log(formData)
}




return <div>
    

<h1> React Form </h1>

<form onSubmit={stopReload} ref={Universalref}>

<div> 
    <label htmlFor="username"> User Name <span style={star}> * </span> </label>
    <input type="text" id="username" name="username" />
</div>

<div>
    <label htmlFor="password"> Password <span style={star}> * </span> </label>
    <input type="password" name="password" id="password" />
</div>

<div> 
    <button type="submit"> Register </button>
</div>

</form>

</div>
}