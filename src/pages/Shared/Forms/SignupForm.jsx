import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './Forms.module.css';

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignup = (data) => {
    console.log(data);
    console.log(errors);
  };

  return (
    <form className="flow" onSubmit={handleSubmit(handleSignup)}>
      <div className={styles.field}>
        <label className={styles.label}>Name</label>
        <input
          type="text"
          className={styles.input}
          {...register('name', {
            required: 'Name is required',
            pattern: { value: /^[a-z ,.'-]+$/i, message: 'Name is not valid' },
          })}
        />
        <span className={styles.error}>{errors?.name?.message}</span>
      </div>
      <div className={styles.field}>
        <label className={styles.label}>Email</label>
        <input
          type="text"
          className={styles.input}
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: 'Email is not valid',
            },
          })}
        />
        <span className={styles.error}>{errors?.email?.message}</span>
      </div>
      <div className={styles.field}>
        <label className={styles.label}>Password</label>
        <input
          type="password"
          className={styles.input}
          {...register('password', {
            required: 'Password is required',
            min: {
              value: 6,
              message: 'Password must be at least 6 characters long',
            },
            validate: {
              hasOneDigit: (value) =>
                /(?=.*?[#?!@$%^&*-])/.test(value) ||
                'Password must contain at least one digit',
              hasOneSpecialChar: (value) =>
                /(?=.*?[#?!@$%^&*-])/.test(value) ||
                'Password must contain at least one special character',
            },
          })}
        />
        <span className={styles.error}>{errors?.password?.message}</span>
      </div>
      <button className="btn-primary">sign up</button>
    </form>
  );
};

export default SignupForm;
