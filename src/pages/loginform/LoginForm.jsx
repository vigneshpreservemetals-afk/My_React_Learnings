

import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    console.log("Form Values:", values);

    // Navigate to Home page after login
    navigate("/home");
  };

  return (
    <div>
      <h2>Login Form</h2>

      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div>
              <label htmlFor="username">Username</label>
              <Field
                id="username"
                type="text"
                name="username"
                placeholder="Enter username"
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <Field
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
              />
            </div>

            <button type="submit">Login</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}