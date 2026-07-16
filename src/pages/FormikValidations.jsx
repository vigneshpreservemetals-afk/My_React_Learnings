import React from "react";
import { Formik,Form,FastField,ErrorMessage } from "formik";
import * as Yup from 'yup'
import 'bootstrap/dist/css/bootstrap.min.css';


const initialValues = {
    username: "",
    password: "",
    confirmpassword: "",
    country: ""
}

const validationSchema = Yup.object ({

    username : Yup.string()
    .required("username is mandatory")
    .email("username should be in Email Format"),

    password : Yup.string()
    .required("password is mandatory")
    .matches(
  /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,12}$/,
  "Password should contain at least 1 uppercase letter, 1 number and 1 special character"),

    confirmpassword : Yup.string()
    .required("confirm password required")
    .oneOf([Yup.ref("password")], "passwords must match"),

    country : Yup.string()
    .required("country is mandatory")
    

})

const fieldStyle = {
    display:"Flex",
    flexDirection:"column",
    marginTop:"40px",
    marginLeft:"20px",
    width:"400px",
}

const fieldStyle1 = {
    display:"Flex",
    flexDirection:"column",
    marginTop:"20px",
    marginLeft:"20px",
    width:"400px",
}

export default function FormikValidations(){

    return <div>

        <h3 style={{marginLeft:"20px", marginTop:"40px"}}> Formik Validations </h3>

    <Formik
    
    initialValues={initialValues}

    validationSchema={validationSchema}

    onSubmit={(values, {resetForm}) => {
        console.log("values===>",values);
        resetForm();

    }}>

    <Form>


    <div style={fieldStyle}>
    <label htmlFor="username"> Username </label>
    <FastField name="username" type="text"/>
    <ErrorMessage name="username" component="div" className="text-danger"/>
    </div>

    <div style={fieldStyle1}>
    <label htmlFor="password"> Password </label>
    <FastField name="password" type="password"/>
    <ErrorMessage name="password" component ="div" className="text-danger"/>
    </div>

    <div style={fieldStyle1}>
    <label htmlFor="confirmpassword"> confirm password </label>
    <FastField name="confirmpassword" type="password"/>
    <ErrorMessage name="confirmpassword" component ="div" className="text-danger"/>
    </div>

    <div style={fieldStyle1}>
    <label htmlFor="country"> country </label>
    <FastField as="select" name="country">
    <option value={""}> Select Country </option>
    <option value={"IN"}> India    </option>
    <option value={"PK"}> Pakistan </option> 
    <option value={"CN"}> China </option>
    </FastField>
    <ErrorMessage name="country"component="div" className="text-danger"/>
    </div>


    <div style={{marginLeft:"20px", marginTop:"40px"}}>
    <button type="submit" style={{borderRadius:"4px",width:"400px",height:"40px", background:"green", color:"white"}}> Submit </button>
    </div>

    </Form>



    </Formik>

    </div>
}
