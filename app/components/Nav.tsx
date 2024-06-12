'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from '../styles/layout.module.css';
import Login from './Login';
import Profile from './Profile';
import Register from './Register';
import Users from './Users';

export const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      {localStorage?.token ? (
        <>
          <Link
            className={`${styles.link} ${pathname === '/profile' ? styles.active : ''}`}
            href="/profile"
          >
            profile
          </Link>
          <button>logout</button>
        </>
      ) : (
        <>
          <Link
            className={`${styles.link} ${pathname === '/' ? styles.active : ''}`}
            href="/"
          >
            Login
          </Link>
          <Link
            className={`${styles.link} ${
              pathname === '/register' ? styles.active : ''
            }`}
            href="/register"
          >
            register
          </Link>
          <Link
            className={`${styles.link} ${
              pathname === '/users' ? styles.active : ''
            }`}
            href="/users"
          >
            users
          </Link>
        </>
      )}
    </nav>
  );
};
