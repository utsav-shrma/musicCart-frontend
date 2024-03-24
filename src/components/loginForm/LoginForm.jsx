import React,{useState} from "react";
import styles from "./LoginForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginUser } from "../../api/auth";
import { useNavigate } from "react-router";
import { loginValidateSchema } from "../../utility/validator";

function LoginForm() {
    const navigate=useNavigate();
    const [credentialsError,setCredentialsError]=useState(false);
  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    
    setSubmitting(false);
    
    const response=await loginUser({...values});
    // console.log("Form submitted with values:", values);
      if(response){
        localStorage.setItem("token", response.token);
        localStorage.setItem("userName", response.name);
        resetForm();
        navigate("/");
    }
        else{
            setCredentialsError(true);
        }
  };

  return (
    <div className={styles.container}>
        <div className={styles.welcomeMessage}>
        <h1>
            Welcome
        </h1>
        </div>
      <div className={styles.formContainer}>
        <div className={styles.formInnerContainer} >
        <div className={styles.signHeadingContainer}>
          <h1 className={styles.signHeading}> Sign In.</h1>
          <h1 className={styles.signQuestionHeading}> Already a customer?</h1>
        </div>

        <div className={styles.formik}>
          <Formik
            initialValues={{
              emailOrPhone: "",
              password: "",
            }}
            validationSchema={loginValidateSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className={styles.formInput}>
                  <label htmlFor="emailOrPhone">Enter your email or mobile number</label>
                  <Field className={styles.inputText} type="emailOrPhone" name="emailOrPhone" />
                  <ErrorMessage  className={styles.errorMessage}name="emailOrPhone" component="div" />
                </div>

                <div className={styles.formInput}>
                  <label htmlFor="password">Password</label>
                  <Field className={styles.inputText} type="password" name="password" />
                  <ErrorMessage className={styles.errorMessage} name="password" component="div" />
                </div>
                {credentialsError?<div className={styles.credentialsError}>
                <p className={styles.errorMessage}>Invalid Credentials</p>
                </div>:""}
                <button className={styles.submitButton} type="submit" disabled={isSubmitting}>
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
      </div>

      <div className={styles.lineContainer}>
        <hr className={styles.line}></hr>
       
        <p className={styles.lineText}>New to Musicart?</p>
        
        
        <hr className={styles.line}></hr>
      </div>
      <button onClick={()=>{navigate('/register');}}className={styles.registerButton}>
        Create your Musicart account
      </button>
    </div>
  );
}

export default LoginForm;
