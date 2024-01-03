import { type FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav: FC = () => {
  return (
    <ul className={styles.list}>
      <li>
        <NavLink
          style={({ isActive }) => (isActive ? { color: 'blue' } : undefined)}
          to="/study-room/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive }) => (isActive ? { color: 'blue' } : undefined)}
          to="/study-room/blog"
        >
          Blog
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;
