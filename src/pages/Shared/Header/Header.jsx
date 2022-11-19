import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FcMenu } from 'react-icons/fc';
import { AiOutlineClose } from 'react-icons/ai';
import { useAuth } from '../../../contexts/AuthContext';
import styles from './Header.module.css';

const Header = () => {
  const { user, logOut } = useAuth();
  const [isNavVisible, setIsNavVisible] = useState(false);

  const handleNavToggle = () => {
    setIsNavVisible((prevIsNavVisible) => !prevIsNavVisible);
    document.body.style.overflow = isNavVisible ? 'unset' : 'hidden';
  };

  return (
    <header className={styles.header}>
      <nav className={`${styles.navbar} | container`}>
        <Link className={styles.logo} to="/">
          doctors portal
        </Link>
        <ul className={styles.menu} data-visible={isNavVisible}>
          <li className={styles.item}>
            <NavLink to="/">home</NavLink>
          </li>
          <li className={styles.item}>
            <NavLink to="/about">about</NavLink>
          </li>
          <li className={styles.item}>
            <NavLink to="/appointment">appointment</NavLink>
          </li>
          <li className={styles.item}>
            <NavLink to="/reviews">reviews</NavLink>
          </li>
          <li className={styles.item}>
            <NavLink to="/contact">contact us</NavLink>
          </li>
          {user ? (
            <li className={styles.item}>
              <button className={styles.logoutBtn} onClick={logOut}>
                Log Out
              </button>
            </li>
          ) : (
            <li className={styles.item}>
              <NavLink to="/login">login</NavLink>
            </li>
          )}
        </ul>
        <button className={styles.toggle} onClick={handleNavToggle}>
          {isNavVisible ? <AiOutlineClose /> : <FcMenu />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
