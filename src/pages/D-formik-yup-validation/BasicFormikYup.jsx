

import { Formik, Form, FastField, ErrorMessage, } from 'formik'
import 'bootstrap/dist/css/bootstrap.min.css';

import * as Yup from 'yup'


const initialValues = {

    username: "",
    password: "",
    confirmPassword: "",
    country: ""
}

const validationSchema = Yup.object({

    username: Yup.string()
        .required("User Name field is required")
        .email("Invalid email format"),

    password: Yup.string()
        .required("Password required")
        .max(8, "It should be combination of special characters, numbers & alphabets, Maximum length should be 8 characters")
        .matches(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{6,12}$/, "Password must contain at least 1 uppercase letter, 1 number, 1 special character, and be 8 characters long"),

    confirmPassword: Yup.string()
        .required("Confirm Password is required")
        .oneOf([Yup.ref("password")], "Passwords must match"),

    country: Yup.string()
        .required("Country Field is Mandatory")

});

export default function BasicFormikYup() {


    return <div>

        <Formik

            initialValues={initialValues}

            validationSchema={validationSchema}

            onSubmit={(values, { resetForm }) => {
                console.log("values===>", values)
                resetForm()

            }}
        >
            <Form>

                <div>
                    <label htmlFor=""> User Name</label>
                    <FastField type="text" name="username" />
                    <ErrorMessage name="username" component="div" className="text-danger"/>
                </div>

                <div>
                    <label htmlFor=""> password </label>
                    <FastField type="password" name="password" />
                    <ErrorMessage name="password" component="div" className="text-danger"/>
                </div>

                <div>
                    <label htmlFor=""> confirm password </label>
                    <FastField type="confirmPassword" name="confirmPassword" />
                    <ErrorMessage name="confirmPassword" component="div" className="text-danger"/>
                </div>

                <div>
                    <label htmlFor=""> country </label>
                    <FastField as="select" name="country">
                        <option value=""> Select Country </option>
                        <option value="IN"> India </option>
                        <option value="PK"> Pakisthan </option>
                        <option value="MY"> Malaysia </option>
                        <option value="CN"> China </option>
                    </FastField>
                    <ErrorMessage name="country" component="div" className="text-danger"/>
                </div>

                <div>
                    <button type="submit"> Submit </button>
                </div>


            </Form>


        </Formik>
    </div>

}


