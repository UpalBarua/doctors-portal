import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../Shared/Forms/LoginForm';
import { Toaster, toast } from 'react-hot-toast';
import styles from './Login.module.css';
import { useAuth } from '../../contexts/AuthContext';

const Login = () => {
  const { googleSignIn } = useAuth();

  const handleGoogleSignIn = async () => {
    try {
      const response = await googleSignIn();
      toast.success('Log In successful');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section className={`${styles.login} | container flow`}>
      <h2 className={styles.title}>Login</h2>
      <LoginForm />
      <p className={styles.redirect}>
        New to Doctors Portal? <Link to="/signup">Create new account</Link>
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
