import React from 'react';
import { Link } from 'react-router-dom';
import SignupForm from '../Shared/Forms/SignupForm';
import styles from './Signup.module.css';

const Login = () => {
  return (
    <section className={`${styles.signup} | container flow`}>
      <h2 className={styles.title}>Sign Up</h2>
      <SignupForm />
      <p className={styles.redirect}>
        Already have an account? <Link to="/login">Login now</Link>
      </p>
      <span className={styles.divider}>OR</span>
      <button className="btn-secondary">continue with google</button>
    </section>
  );
};

export default Login;
