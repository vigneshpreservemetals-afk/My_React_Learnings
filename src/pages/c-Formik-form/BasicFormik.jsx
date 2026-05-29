

import { Formik, Form , FastField,} from 'formik'

export default function BasicFormik() {

    return <div>

        <Formik
        
        initialValues = {{
            username :"",
            password : "",
            country  : "IN"
        }}

        onSubmit = {(values) => {
            console.log("values===>",values)
            
        }}
        >
            <Form>

                <div>
                <label htmlFor=""> User Name</label>
                <FastField type="text" name="username"/>
                </div>

                <div>
                <label htmlFor=""> password </label>
                <FastField type="password" name="password"/>
                </div>

                 <div>
                <label htmlFor=""> country </label>
                <FastField as="select" name="country">
                <option value="IN"> India </option>
                <option value="PK"> Pakisthan </option>
                <option value="MY"> Malaysia </option>
                <option value="CN"> China </option>
                </FastField>
                </div>

                <div>
                <button type="submit"> Submit </button>
                </div>


            </Form>
        
        

        </Formik>
    </div>
}