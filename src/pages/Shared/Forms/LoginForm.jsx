import React from 'react';
import styles from './Forms.module.css';

const LoginForm = () => {
  return (
    <form className="flow">
      <div className={styles.field}>
        <label className={styles.label}>Email</label>
        <input type="text" className={styles.input} />
      </div>
      <div className={styles.field}>
        <label className={styles.label}>Password</label>
        <input type="password" className={styles.input} />
      </div>
      <button className="btn-primary">login</button>
    </form>
  );
};

export default LoginForm;
