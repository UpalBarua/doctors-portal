import React from 'react';
import styles from './Forms.module.css';

const SignupForm = () => {
  return (
    <form className="flow">
      <div className={styles.field}>
        <label className={styles.label}>Name</label>
        <input type="text" className={styles.input} />
      </div>
      <div className={styles.field}>
        <label className={styles.label}>Email</label>
        <input type="text" className={styles.input} />
      </div>
      <div className={styles.field}>
        <label className={styles.label}>Password</label>
        <input type="password" className={styles.input} />
      </div>
      <button className="btn-primary">sign up</button>
    </form>
  );
};

export default SignupForm;
