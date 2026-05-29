

 import {Formik, Form, ErrorMessage, FastField} from "formik";
 import * as Yup from 'yup'
 import 'bootstrap/dist/css/bootstrap.min.css';

 const initialValues = {
    username: "",
    password: "",
    confirmPassword: "",
    country: ""
 }

 const validationSchema = Yup.object ({

    username: Yup.string()
    .required("Username should be in email format")
    .email("username required"),
    

    password: Yup.string()
    .required("password required")
    .min(8, "Password should contain minimum of 8 characters")
    .matches(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{6,12}$/, "Password should contain atleast 1 alphabet, 1 number & 1 Special Characters"),

    confirmPassword: Yup.string()
    .required("confirm password required")
    .oneOf([Yup.ref("password")], "Passwords must match"),

    country: Yup.string()
    .required("country required"),

});

export default function FormikYup() {


return <div>

    <h3> Formik Validation - Example 2  </h3> 

    <Formik
    
    initialValues = {initialValues}

    validationSchema = {validationSchema}

    onSubmit={(values, {resetForm}) => {

    console.log("values===>",values)

    }}
    >
    
    <Form> 

        <div>
            <label htmlFor=""> Username </label>
            <FastField name="username" type="text"/>
            <ErrorMessage name="username" component="div" className="text-danger"/>
        </div>

        <div>
            <label htmlFor=""> Password </label>
            <FastField name="password" type="password"/>
            <ErrorMessage name="password" component="div" className="text-danger"/>
        </div>

        <div>
            <label htmlFor=""> Confirm Password </label>
            <FastField name="confirmPassword" type="password"/>
            <ErrorMessage name="confirmPassword" component="div" className="text-danger"/>
        </div>

        <div>
            <label htmlFor=""> Country </label>
            <FastField as="select" name="country">
            <option value=""> Select Country </option>
            <option value="IN"> India </option>
            <option value="PK"> Pakistan </option>
            <option value="MY"> Malaysia </option>
            </FastField>
            <ErrorMessage name="confirmPassword" component="div" className="text-danger"/>
        </div>

        <div>
            <button type="submit"> Submit </button>
        </div>

    </Form>


    </Formik>

    </div>
}

