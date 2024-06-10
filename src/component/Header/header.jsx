import React from 'react';
import styles from './header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_content}>
        <h1 className={styles.header_logo}>Job Portal</h1>
        <nav className={styles.header_nav}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/login">Login</NavLink>

        </nav>
      </div>
    </header>
  );
};

export default Header;
