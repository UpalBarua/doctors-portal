import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../Shared/Forms/LoginForm';
import styles from './Login.module.css';

const Login = () => {
  return (
    <section className={`${styles.login} | container flow`}>
      <h2 className={styles.title}>Login</h2>
      <LoginForm />
      <p className={styles.redirect}>
        New to Doctors Portal? <Link to="/signup">Create new account</Link>
      </p>
      <span className={styles.divider}>OR</span>
      <button className="btn-secondary">continue with google</button>
    </section>
  );
};

export default Login;
