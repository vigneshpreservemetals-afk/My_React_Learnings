

import{ Formik, Form, Fastfield} from 'Formik'

export default function BasicFormik() {

    return <div>

        <h3> Basic Formik </h3>

        <Formik 

            initialvalues ={{
                username = "",
                password = "",
                country  = ""
            }}

            onsubmit = {(values) => {

                console.log("values===>",values)

            }}

        > 

        <form>

            <div> 
                <label htmlFor="username"> username </label>
                <Fastfield type="text" name="username"> username </Fastfield>
            </div>

            <div> 
                <label htmlFor=""> password </label>
                <Fastfield type="text" name="password"> password </Fastfield>
            </div>

            <div> 
                <label htmlFor=""> country </label>
                <Fastfield as="select" name="country"> 
                <option value="TN"> Tamil Nadu </option>
                <option value="PK"> Pakistan </option>
                <option value="CN"> China </option>
                <option value="MY"> China </option>
                </Fastfield>
            </div>

            <div> 
                
                <Fastfield type="submit" name="register" value="Register"> Submit </Fastfield>
            </div>
            
            
            
        </form>    


        </Formik>
    </div>
}



