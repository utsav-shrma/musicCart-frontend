import React from 'react'
import Heading from '../../components/heading/Heading'
import Footer from '../../components/footer/Footer'
import LoginForm from '../../components/loginForm/LoginForm'
import styles from "./LoginPage.module.css"

function LoginPage() {
  return (
    <div className={styles.container}>
        <Heading></Heading>
        <LoginForm></LoginForm>
        <Footer></Footer>
    </div>
  )
}

export default LoginPage