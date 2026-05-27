

import{ Formik,Form, FastField} from 'formik'

export default function BasicFormik() {

    return <div>

        <h3> Basic Formik </h3>

        <Formik 

            initialValues ={{
                username : "",
                password : "",
                country  : ""
            }}

            onSubmit = {(values) => {

                console.log("values===>",values)

            }}

        > 

        <Form>

            <div> 
                <label htmlFor="username"> username </label>
                <FastField type="text" name="username"/> 
            </div>

            <div> 
                <label htmlFor=""> password </label>
                <FastField type="password" name="password"/> 
            </div>

            <div> 
                <label htmlFor=""> country </label>
                <FastField as="select" name="country"> 
                <option value="TN"> Tamil Nadu </option>
                <option value="PK"> Pakistan </option>
                <option value="CN"> China </option>
                <option value="MY"> China </option>
                </FastField>
            </div>

            <div> 
                
                <button type='submit'> Submit </button>
            </div>
            
            
            
        </Form>    


        </Formik>
    </div>
}



