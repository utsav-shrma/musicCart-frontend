import React from 'react';
import Heading from '../../components/heading/Heading';
import Footer from '../../components/footer/Footer';
import styles from './RegisterPage.module.css';
import RegisterForm from '../../components/registerForm/RegisterForm';

function RegisterPage() {
  return (
    <div className={styles.container}>
      <Heading></Heading>
      <RegisterForm></RegisterForm>
      <Footer></Footer>
    </div>
  )
}

export default RegisterPage