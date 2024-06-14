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
            Profile
          </Link>
          <Link
            className={`${styles.link} ${pathname === '/addProduct' ? styles.active : ''}`}
            href="/addProduct"
          >
            AddProduct
          </Link>
          <Link
            className={`${styles.link} ${pathname === '/addCategory' ? styles.active : ''}`}
            href="/addCategory"
          >
            AddCategory
          </Link>
          <Link
            className={`${styles.link} ${pathname === '/categories' ? styles.active : ''}`}
            href="/categories"
          >
            Categories
          </Link>
          <Link
            className={`${styles.link} ${pathname === '/settings' ? styles.active : ''}`}
            href="/settings"
          >
            Settings
          </Link>
          <button>Log Out</button>
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
            Register
          </Link>
          <Link
            className={`${styles.link} ${
              pathname === '/users' ? styles.active : ''
            }`}
            href="/users"
          >
            Users
          </Link>
        </>
      )}
    </nav>
  );
};
