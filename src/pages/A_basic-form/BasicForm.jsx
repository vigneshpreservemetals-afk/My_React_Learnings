
import { useState } from "react";

export default function BasicForm() {

    const[formData, setformData] = useState({})

    const handleChange = (event) => {

        const name = event?.target?.name
        const value = event?.target?.value

        setformData({...formData, [name]:value})
    }

    const handleSubmit = (event) => {

        event.preventDefault()
        console.log("the form data is submitted", formData)
    }


return <div>

    <div> Basic Form </div>

    <div> 
        <form onSubmit={handleSubmit}>

            <div>

            <label htmlFor="UserName"> User Name </label>

            <input type="text" name="user-name" id="user-name" onChange={handleChange} /> 

            </div>

            <div>

            <label htmlFor="UserName"> Password </label>

            <input type="password" name="password" id="password" onChange={handleChange} /> 

            </div>

            <div> 
                <button type="submit"> Submit </button>
            </div>

        </form>
    </div>
</div>

}