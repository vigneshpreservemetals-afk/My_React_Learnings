import { useState } from "react";
import StudentFormJson from "./StudentForm.json";

export default function StudentForm() {

    const [formData, setFormData] = useState({})

    const handleChange = (event) => {

        const name = event.target.name
        const value = event.target.value

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (event) => {

        event.preventDefault()

        console.log(formData)

        alert("Form Submitted")
    }

    return (
        <div>

            <h1>Student Registration Form</h1>

            <form onSubmit={handleSubmit}>

                {
                    StudentFormJson.map((field, index) => {

                        // TEXT / EMAIL / NUMBER INPUTS
                        if (
                            field.fieldType === "text" ||
                            field.fieldType === "email" ||
                            field.fieldType === "number"
                        ) {

                            return (
                                <div key={index}>

                                    <label>
                                        {field.fieldLabelName}
                                    </label>

                                    <br />

                                    <input
                                        type={field.fieldType}
                                        name={field.fieldname}
                                        id={field.fieldID}
                                        onChange={handleChange}
                                    />

                                    <br />
                                    <br />

                                </div>
                            )
                        }

                        // SELECT BOX
                        if (field.fieldType === "selectbox") {

                            return (
                                <div key={index}>

                                    <label>
                                        {field.fieldLabelName}
                                    </label>

                                    <br />

                                    <select
                                        name={field.fieldname}
                                        onChange={handleChange}
                                    >

                                        <option>
                                            Select Gender
                                        </option>

                                        {
                                            field.options.map((option, optionIndex) => (

                                                <option key={optionIndex}>
                                                    {option}
                                                </option>

                                            ))
                                        }

                                    </select>

                                    <br />
                                    <br />

                                </div>
                            )
                        }

                        // SUBMIT BUTTON
                        if (field.fieldType === "submit") {

                            return (
                                <div key={index}>

                                    <button
                                        type="submit"
                                        disabled={field.disabled}
                                    >
                                        {field.buttonText}
                                    </button>

                                </div>
                            )
                        }

                    })
                }

            </form>

        </div>
    )
}