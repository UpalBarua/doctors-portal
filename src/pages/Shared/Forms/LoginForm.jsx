import React, { useRef } from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import { toast } from 'react-hot-toast';
import styles from './Forms.module.css';

const LoginForm = () => {
  const { logIn } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await logIn(
        emailRef.current.value,
        passwordRef.current.value
      );
      toast.success('Log In Successful');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <form className="flow" onSubmit={handleLogin}>
      <div className={styles.field}>
        <label className={styles.label}>Email</label>
        <input type="text" className={styles.input} ref={emailRef} />
      </div>
      <div className={styles.field}>
        <label className={styles.label}>Password</label>
        <input type="password" className={styles.input} ref={passwordRef} />
      </div>
      <button className="btn-primary">login</button>
    </form>
  );
};

export default LoginForm;
