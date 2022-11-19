import React from 'react';
import { Link } from 'react-router-dom';
import SignupForm from '../Shared/Forms/SignupForm';
import { Toaster } from 'react-hot-toast';
import styles from './Signup.module.css';
import { useAuth } from '../../contexts/AuthContext';

const Login = () => {
  const { googleSignIn } = useAuth();

  const handleGoogleSignIn = async () => {
    try {
      const response = await googleSignIn();
      toast.success('Sign Up successful');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section className={`${styles.signup} | container flow`}>
      <h2 className={styles.title}>Sign Up</h2>
      <SignupForm />
      <p className={styles.redirect}>
        Already have an account? <Link to="/login">Login now</Link>
      </p>
      <span className={styles.divider}>OR</span>
      <button className="btn-secondary" onClick={handleGoogleSignIn}>
        continue with google
      </button>
      <Toaster position="top-center" reverseOrder={false} />
    </section>
  );
};

export default Login;
