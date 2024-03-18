import React, { useState } from "react";
import styles from "./RegisterForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { registerUser } from "../../api/auth";
import { useNavigate } from "react-router";
import { signUpFormValidation } from "../../utility/validator";

import { Link } from "react-router-dom";

function RegisterForm() {
  const navigate = useNavigate();
  const [credentialsError, setCredentialsError] = useState(false);
  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(false);
    const response = await registerUser({ ...values });
    if (response) {
      console.log(response);
      localStorage.setItem("token", response.token);
      localStorage.setItem("userName", response.name);
      resetForm();
      navigate("/");
    } else {
      setCredentialsError(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.welcomeMessage}>
        <h1>Welcome</h1>
      </div>
      <div className={styles.formContainer}>
        <div className={styles.signHeadingContainer}>
          <h1 className={styles.signHeading}> Create Account. </h1>
          <h1 className={styles.signQuestionHeading}>
            {" "}
            Don’t have an account?
          </h1>
        </div>

        <div>
          <Formik
            initialValues={{
              name: "",
              phone: "",
              email: "",
              password: "",
            }}
            validationSchema={signUpFormValidation}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <Form className={styles.formik}>
                <div className={styles.formInput}>
                  <label htmlFor="name">Your Name</label>
                  <Field className={styles.inputText} type="name" name="name" />
                  <ErrorMessage
                    className={styles.errorMessage}
                    name="name"
                    component="div"
                  />
                </div>

                <div className={styles.formInput}>
                  <label htmlFor="phone">Mobile Number</label>
                  <Field
                    className={styles.inputText}
                    type="phone"
                    name="phone"
                  />
                  <ErrorMessage
                    className={styles.errorMessage}
                    name="phone"
                    component="div"
                  />
                </div>

                <div className={styles.formInput}>
                  <label htmlFor="email">Email Id</label>
                  <Field
                    className={styles.inputText}
                    type="email"
                    name="email"
                  />
                  <ErrorMessage
                    className={styles.errorMessage}
                    name="email"
                    component="div"
                  />
                </div>

                <div className={styles.formInput}>
                  <label htmlFor="password">Password</label>
                  <Field
                    className={styles.inputText}
                    type="password"
                    name="password"
                  />
                  <ErrorMessage
                    className={styles.errorMessage}
                    name="password"
                    component="div"
                  />
                </div>

                <p className={styles.enrollTerms}>
                  By enrolling your mobile phone number, you consent to receive
                  automated security notifications via text message from
                  Musicart. Message and data rates may apply.
                </p>

                {credentialsError ? (
                  <div className={styles.credentialsError}>
                    <p className={styles.errorMessage}>User already exists</p>
                  </div>
                ) : (
                  ""
                )}

                <button
                  className={styles.submitButton}
                  type="submit"
                  disabled={isSubmitting}
                >
                  Continue
                </button>
              </Form>
            )}
          </Formik>
        </div>

        <p className={styles.terms}>
          By continuing, you agree to Musicart privacy notice and conditions of
          use.
        </p>
      </div>

      <div className={styles.signInSuggestion}>
        <p className={styles.lineText}>
          Already have an account? &nbsp; <Link to={`/login`}> Sign in</Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterForm;
