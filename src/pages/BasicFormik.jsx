
import { Formik,Form,FastField } from "formik";

export default function BasicFormik(){

return <div>

<Formik
initialValues={{
    username="",
    password="",
    confirmpassword="",
    country=""}}

onSubmit={(values)=> {
    console.log("values===>",values)
}}>

<Form>

<div>
    <label htmlFor="username"> username </label>
    <FastField type="text" name="username" /> 
</div>

<div>
    <label htmlFor="password"> password </label>
    <FastField type="password" name="password" /> 
</div>

<div>
    <label htmlFor="confirmpassword"> confirm password </label>
    <FastField type="password" name="confirmpassword" /> 
</div>

<div>
    <label htmlFor="country"> country </label>
    <FastField as="select" value=""> Select Country </FastField>
    <FastField as="select" value="IN"> India </FastField>
    <FastField as="select" value="CN"> CHINA </FastField>
</div>

<div>
    <button type="submit"> Submit </button>
</div>


</Form>


</Formik>
</div>
}